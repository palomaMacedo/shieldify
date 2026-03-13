import { faker } from "@faker-js/faker"
import { hash } from "bcryptjs"
import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import "dotenv/config"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

async function seed() {
  await prisma.project.deleteMany()
  await prisma.member.deleteMany()
  await prisma.invite.deleteMany()
  await prisma.token.deleteMany()
  await prisma.account.deleteMany()
  await prisma.organization.deleteMany()
  await prisma.user.deleteMany()

  const passwordHash = await hash("12345678", 1)

  const [user, anotherUser, anotherUser2] = await Promise.all([
    prisma.user.create({
      data: {
        name: 'Paloma Macedo',
        email: 'paloma.macedo@wxplus.com',
        avatarUrl: 'https://github.com/palomaMacedo.png',
        passwordHash,
      }
    }),
    prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        avatarUrl: faker.image.avatarGitHub(),
        passwordHash,
      }
    }),
    prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        avatarUrl: 'https://avatars.githubusercontent.com/u/208661389?s=48&v=4',
        passwordHash,
      }
    }),
  ])

  await prisma.organization.create({
    data: {
      name: 'WX Plus (Admin)',
      domain: 'wxplus.com',
      slug: 'wx-plus-admin',
      avatarUrl: 'https://avatars.githubusercontent.com/u/208661389?s=48&v=4',
      shouldAttachUsersByDomain: true,
      ownerId: user.id,
      members: {
        createMany: {
          data: [
            { userId: user.id, role: 'ADMIN' },
            { userId: anotherUser.id, role: 'MEMBER' },
            { userId: anotherUser2.id, role: 'MEMBER' },
          ],
        },
      },
      projects: {
        createMany: {
          data: [
            {
              name: 'Dashboard Analytics',
              slug: 'dashboard-analytics',
              description: 'Painel de controle financeiro com gráficos e relatórios',
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: user.id,
            },
            {
              name: 'Módulo de Billing',
              slug: 'modulo-billing',
              description: 'Gestão de faturamento e cobranças da plataforma',
              avatarUrl: 'https://avatars.githubusercontent.com/u/208661389?s=48&v=4',
              ownerId: anotherUser.id,
            },
            {
              name: 'API de Pagamentos',
              slug: 'api-pagamentos',
              description: 'Integração com gateways de pagamento',
              avatarUrl: 'https://avatars.githubusercontent.com/u/208661389?s=48&v=4',
              ownerId: anotherUser2.id,
            },
          ],
        },
      },
    },
  })
}

seed()
  .then(() => {
    console.log('✅ Seed concluído!')
  })
  .catch((e) => {
    console.error('❌ Erro no seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })