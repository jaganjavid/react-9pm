import { Card, PasswordInput, Stack, TextInput, Button } from "@mantine/core"
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { fireDb } from "../firebaseConfig";
import { useForm } from "@mantine/form";

const Login = () => {

  const navigate = useNavigate();

  const loginForm = useForm({
    initialValues: {
      email:"",
      password:""
    }
  })

  const onSubmit = async(e) => {
    e.preventDefault();

    // check if user already exist 

    const qry = query(
      collection(fireDb, "users"),
      where("email", "==", loginForm.values.email),
      where("password", "==", loginForm.values.password)
    )

    const existingUsers = await getDocs(qry);
    console.log(existingUsers);
    if(existingUsers.size > 0){
      const dataToStoreLs = {
        name : existingUsers.docs[0].data().name,
        email : existingUsers.docs[0].data().email,
        id : existingUsers.docs[0].id
      }
      localStorage.setItem("user", JSON.stringify(dataToStoreLs));
      navigate("/");
    } else {
      alert("User not found");
    }


  
  }

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
       <form onSubmit={onSubmit}> 
         <Stack mb={20}>
           <TextInput 
           label="Email"
           required
           type="email"
           placeholder="Enter your email"
           name="email"
           {...loginForm.getInputProps("email")}
           />
         </Stack>
         
         <Stack mb={20}>
           <PasswordInput 
           label="Password"
           required
           minLength={6}
           placeholder="Enter your password"
           name="password"
           {...loginForm.getInputProps("password")}
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