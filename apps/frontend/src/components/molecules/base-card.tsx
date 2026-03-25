import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface BaseCardProps {
  title?: string
  description?: string
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string 
  contentClassName?: string 
}

export function BaseCard({ 
  title, 
  description, 
  children, 
  footer, 
  className, 
  contentClassName 
}: BaseCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-200", // Estilos base para TODO card da WX+
      "bg-white border shadow-sm", // Visual padrão (limpo)
      className
    )}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle className="text-xl font-bold tracking-tight">{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      
      <CardContent className={cn("p-6", contentClassName)}>
        {children}
      </CardContent>

      {footer && (
        <CardFooter className="bg-gray-50/50 border-t p-4">
          {footer}
        </CardFooter>
      )}
    </Card>
  )
}