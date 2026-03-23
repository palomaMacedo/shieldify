import { Input } from "@/components/atoms/input"
import { Label } from "@/components/atoms/label"
import { Button } from "@/components/atoms/button"
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
      <Button variant="link" asChild>
        <Link href="/auth/forgot-password">Forgot your password?</Link>
      </Button>
      <Button type="submit">Sign in</Button>
      <Button variant="link" asChild>
        <Link href="/auth/sign-up">Don't have an account? Sign up</Link>
      </Button>
      <Button type="button">Sign in with GitHub</Button>
    </form>
  )
}