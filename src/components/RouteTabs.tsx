import { Box, Text } from "@chakra-ui/react"
import { FC, ReactNode, useState } from "react"
import { NavLink, LinkProps } from "react-router-dom"
import colors from "../utils/colors";


interface IProps {
    title: string;
    icon?: ReactNode;
    
}

const RouteTab: FC<IProps> = ({ title, icon,  }) => {

    const activeStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.blue} , ${colors.purpleIsh})`,
        display: "flex", 
        marginBottom: "15px", 
        padding: "5px",
        color: colors.white,
        paddingTop: "10px",
        paddingBottom: "10px",
        alignItems: "center",
        paddingLeft: "20px",
        borderRadius: "0px 15px 15px 0px",
       
    }

    return (
    
    <NavLink
        style={({ isActive }) => (
            isActive ? activeStyle : {
                ...activeStyle, backgroundImage: "none", color: colors.black,
            } 
            )} 
            to={`/${title.toLowerCase()}`
        }
    >
        <Box fill="red" mr={1} w={8} >
            {icon}
        </Box>
        <Text>{title}</Text>
    </NavLink>
    
    )
}

export default RouteTab