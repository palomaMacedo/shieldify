import Image, { StaticImageData } from "next/image"
import { cn } from "@/lib/utils" 

import heroImgDesktop from "@/shared/assets/images/img-hero-desktop.png"
import whyChooseImgDesktop from "@/shared/assets/images/img-whyChoose-desktop.png"
import featuresImgDesktop from "@/shared/assets/images/img-mobile-desktop.png"
import faqImgDesktop from "@/shared/assets/images/img-faq-desktop.png"
import aboutUsImgDesktop from "@/shared/assets/images/img-aboutUs-desktop.png"
import aboutUsImgInternational from "@/shared/assets/images/img-aboutUs-international-desktop.png"
import aboutUsImgTime from "@/shared/assets/images/img-aboutUs-time.png"
import contactImgDesktop from "@/shared/assets/images/img-contact-desktop.png"
import loginImgDesktop from "@/shared/assets/images/img-login-desktop.png"
import createAccountImgDesktop from "@/shared/assets/images/img-creatAccount-desktop.png"

const images: Record<string, StaticImageData> = {
  hero: heroImgDesktop,
  whyChoose: whyChooseImgDesktop,
  recursos: featuresImgDesktop,
  faq: faqImgDesktop,
  quemSomos: aboutUsImgDesktop,
  quemSomosInternational: aboutUsImgInternational,
  quemSomosTime: aboutUsImgTime,
  contato: contactImgDesktop,
  login: loginImgDesktop,
  cadastroUsuario: createAccountImgDesktop,
}

type ImageName = keyof typeof images

interface AppImageProps {
  name: ImageName
  alt: string
  credit?: {
    text: string
    url: string
  }
  className?: string
  priority?: boolean 
}

export function AppImage({ name, alt, credit, className, priority = false }: AppImageProps) {
  return (
    <div className={cn("w-full h-auto", className)}>
      <Image
        src={images[name]}
        alt={alt}
        priority={priority}
        placeholder="blur" 
        className="w-full h-auto object-contain"
      />
      
      {credit && (
        <p className="text-right text-[8px] text-[#c6c6c6] mt-1">
          Imagem de{" "}
          <a
            href={credit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {credit.text}
          </a>
        </p>
      )}
    </div>
  )
}