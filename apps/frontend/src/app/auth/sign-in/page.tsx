import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SignIn() {
  return (
    <form action="">
      <div className="">
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" />
      </div>
      <div className="">
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" id="password" />
      </div>
      <Link href="/auth/forgot-password">Forgot your password?</Link>
      <Link href="/auth/sign-up">Don't have an account? Sign up</Link>
      <Button type="submit">Sign in</Button>
    </form>
  )
}