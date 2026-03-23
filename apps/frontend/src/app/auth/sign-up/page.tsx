import { Input } from "@/components/atoms/input"
import { Label } from "@/components/atoms/label"
import { Button } from "@/components/atoms/button"
import Link from "next/link"


export default function SignUp() {
  return (
    <form action="">
       <div className="">
        <Label htmlFor="name">Nome</Label>
        <Input type="text" name="name" id="name" />
      </div>
      <div className="">
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" />
      </div>
      <div className="">
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" id="password" />
      </div>
       <div className="">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input type="password" name="confirm-password" id="confirm-password" />
      </div>
     
      <Button type="submit">Create account</Button>
      <Button variant="link" asChild>
        <Link href="/auth/sign-in">Already have an account? Sign in </Link>

      </Button>
      <Button type="button">Sign up with github</Button>
    </form>
  )
}