
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ButtonCustomProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'green' | 'white'
  asChild?: boolean 
}

export function ButtonCustom({ 
  children, 
  variant = 'green',
  className,
  asChild = false, 
  ...props 
}: ButtonCustomProps) {
  
  const variants = {
    green: 'bg-brand-green text-white hover:bg-brand-green-dark', 
    white: 'bg-white text-brand-green border border-brand-green hover:bg-gray-50',
  }

  return (
    <Button
      asChild={asChild}
      className={cn(
        "font-semibold transition-all active:scale-95 cursor-pointer rounded-md px-4 py-2", 
        variants[variant], 
        className
      )}
      {...(props as any)}
    >
      {children}
    </Button>
  )
}