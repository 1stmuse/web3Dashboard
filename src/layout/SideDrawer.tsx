import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import RouteTab from "../components/RouteTabs"
import {ReactComponent as Home} from "../assets/icons/home.svg"
import {ReactComponent as Market}from "../assets/icons/market.svg"
import {ReactComponent as Settings} from "../assets/icons/settings.svg"
import {ReactComponent as Portfolio} from "../assets/icons/credit-card.svg"
import {ReactComponent as Favourite} from "../assets/icons/heart.svg"
import Logo from "../assets/images/logo-lg.png"
import { useLocation } from 'react-router-dom';
import colors from '../utils/colors'
import { 
    IoHomeSharp, 
    IoHomeOutline, 
    IoFolder, 
    IoFolderOutline, 
    IoSettingsSharp, 
    IoSettingsOutline,
    IoHeartSharp,
    IoHeartOutline,
    IoApps,
    IoAppsOutline
} from "react-icons/io5"

type Props = {}

export default function SideDrawer({}: Props) {
        
    const  location =  useLocation()

    const getActiveTab = (url: string): boolean => {
        const path = location.pathname.split("/")[1]
        return path === url ? true : false
    }
  return (
    <Box width="100%" >
       
        <Box mr="8">
        <Box my={8} ml={4} >
        <Image src={Logo} width="24" />
        </Box>
        <RouteTab title="Dashboard" icon={ getActiveTab("dashboard") ? <IoHomeSharp/> : <IoHomeOutline/> } />
        <RouteTab title="Market" icon={getActiveTab("market") ? <IoApps/> : <IoAppsOutline/>}  />
        <RouteTab title="Portfolio" icon={ getActiveTab("portfolio") ? <IoFolder/> : <IoFolderOutline/> } />
        <RouteTab title="Favourites" icon={getActiveTab("favourites") ? <IoHeartSharp/> : <IoHeartOutline/>} />
        <RouteTab title="Settings" icon={ getActiveTab("settings") ? <IoSettingsSharp/> : <IoSettingsOutline/> }/>
        </Box>
    </Box>
  )
}