import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ForgotPassword() {
  return (
    <form action="">
      <div className="">
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" />
      </div>
      <Button type="submit">Recover password</Button>
      <Button variant="link" asChild>
        <Link href="/auth/sign-in">Sign in instead</Link>
      </Button>      
    </form>
  )
}