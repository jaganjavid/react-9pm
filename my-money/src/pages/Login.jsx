import { Card, PasswordInput, Stack, TextInput, Button } from "@mantine/core"
import { Link } from "react-router-dom";


const Login = () => {
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
         <h2>Login</h2>
       </Stack>
       <form>
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

         <Link to="/register" style={{color:"grey", textDecoration:"none"}}>Don't have an account? Register</Link>
       </form>
      </Card>
    </div>
  )
}

export default Login