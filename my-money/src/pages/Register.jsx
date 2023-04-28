import { Card, PasswordInput, Stack, TextInput, Button } from "@mantine/core"
import { useForm } from "@mantine/form";
import { Link,useNavigate } from "react-router-dom";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { fireDb } from "../firebaseConfig";
const Register = () => {

  const navigate = useNavigate();

  const registerForm = useForm({
    initialValues: {
      name: "",
      email:"",
      password:""
    }
  })

  const onSubmit = async (e) => {
    e.preventDefault();

    const qry = query(
      collection(fireDb, "users"),
      where("email","==" , registerForm.values.email)
    )

    const existingUsers = await getDocs(qry);


    if(existingUsers.size > 0){
      alert("Already user exist")
      return;
    } else {
      try{
        const response = await addDoc(collection(fireDb, "users"),
        registerForm.values)
        alert("data added");
        navigate("/login");
      } catch(error){
        console.log(error);
      }
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
         <h2>Registration</h2>
       </Stack>
       <form onSubmit={onSubmit}>
         <Stack mb={20}>
           <TextInput 
           label="Name"
           required
           placeholder="Enter your name"
           name="name"
           {...registerForm.getInputProps("name")}
           />
         </Stack>
         <Stack mb={20}>
           <TextInput 
           label="Email"
           required
           type="email"
           placeholder="Enter your email"
           name="email"
           {...registerForm.getInputProps("email")}
           />
         </Stack>
         <Stack mb={20}>
           <PasswordInput 
           label="Password"
           required
           minLength={6}
           placeholder="Enter your password"
           name="password"
           {...registerForm.getInputProps("password")}
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