import { Button, Menu, Text, Container } from "@mantine/core";

const Header = () => {
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
                    <Menu.Target>
                        <Button variant="white">
                            Jagan
                        </Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item>
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