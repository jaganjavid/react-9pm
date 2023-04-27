import { Card, PasswordInput, Stack, TextInput, Button } from "@mantine/core"
import { Link } from "react-router-dom"
const Register = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", minHeight:"90vh"}}>
      <Card
      shadow={"lg"}
      mt={"lg"}
      sx={{
        width:600
      }}
      withBorder>
       <Stack>
         <h2>Registration</h2>
       </Stack>
       <form>
         <Stack mb={20}>
           <TextInput 
           label="Name"
           required
           placeholder="Enter your name"
           name="name"
           />
         </Stack>
         <Stack mb={20}>
           <TextInput 
           label="Email"
           required
           type="email"
           placeholder="Enter your email"
           name="email"
           />
         </Stack>
         <Stack mb={20}>
           <PasswordInput 
           label="Password"
           required
           minLength={6}
           placeholder="Enter your password"
           name="password"
           />
         </Stack>

         <Button fullWidth type="submit" mb={20}>Submit</Button>

         <Link to="/login" style={{color:"grey", textDecoration:"none"}}>Already have an account ? Login</Link>
       </form>
      </Card>
    </div>
  )
}

export default Register