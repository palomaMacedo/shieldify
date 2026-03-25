  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  const items = [
    {
      value: "item-1",
      trigger: "1. Por que é importante fazer o controle financeiro pessoal?",
      content: "O controle financeiro ajuda a entender para onde vai o seu dinheiro, identificar gastos desnecessários, evitar dívidas e planejar objetivos como viagens, aposentadoria ou compra de bens. Ele permite decisões mais conscientes e segurança a longo prazo.",
    },
    {
      value: "item-2",
      trigger: "2. Como começar a organizar minhas finanças?",
      content: "Para começar a organizar suas finanças...",
    },
    {
      value: "item-3",
      trigger: "3. Qual a melhor forma de guardar dinheiro todo mês?",
      content: "A melhor forma de guardar dinheiro...",
    },
      {
      value: "item-4",
      trigger: "4. Qual a melhor forma de guardar dinheiro todo mês?",
      content: "A melhor forma de guardar dinheiro...",
    },
      {
      value: "item-5",
      trigger: "5. Como investir meu dinheiro de forma segura?",
      content: "Existem várias opções de investimento...",
    },
  ]

  export function FaqAccordion() {
    return (
      <Accordion type="single" collapsible className="w-2/4 bg-green-100 rounded-md shadow-md py-5 px-10">
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger className="text-lg font-primary hover:no-underline">{item.trigger}</AccordionTrigger>
            <AccordionContent className="py-3 px-2 brand-green-surface border-b-gray-400">{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }
