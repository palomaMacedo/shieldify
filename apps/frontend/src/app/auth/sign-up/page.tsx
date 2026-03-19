import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"


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
      <Button type="button">Sign up with github</Button>
    </form>
  )
}