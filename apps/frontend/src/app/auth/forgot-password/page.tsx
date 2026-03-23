import { Input } from "@/components/atoms/input"
import { Label } from "@/components/atoms/label"
import { Button } from "@/components/atoms/button"
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