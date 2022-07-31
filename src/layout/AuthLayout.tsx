import {Box, Flex} from "@chakra-ui/react"
import { ReactElement, FC } from "react"
import AuthRoutes from "../navigations/AuthNavigations"
import SideDrawer from "./SideDrawer"
import colors from "../utils/colors"
import Header from "../components/Header"


const AuthLayout = () => {

    return <Flex h="100vh" overflow="hidden" >
        <Box borderRight="1px" borderColor={colors.border} width="200px"  h="100vh" >
            <SideDrawer/>
        </Box>
        <Box w={"100%"}>
            <Header/>
         
            <AuthRoutes/>
           
        </Box>
    </Flex>
}

export default AuthLayout