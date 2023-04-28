import { Button, Menu, Text, Container } from "@mantine/core";

const Header = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  return (
    <header style={{background:"#c37736"}}>
        <Container size={"lg"}>
            <div style={{display:"flex", justifyContent: "space-between", alignItems:"center", padding:"10px 0px"}}>
                <Text size="xl" color={"#ffffff"}>
                    Money App
                </Text> 

                <Menu
                transitionProps={{transition: "pop"}}
                position="top">
                    {user && <Menu.Target>
                        <Button variant="white">
                            {user && user.name}
                        </Button>
                    </Menu.Target>}
                    <Menu.Dropdown>
                        <Menu.Item onClick={logout}>
                            Logout
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </div>
        </Container>
    </header>
  )
}

export default Header