import { Box } from '@chakra-ui/react'
import React from 'react'
import DashboardHero from '../components/dashboard/DashboardHero'
import TopNFT from "../components/dashboard/TopNFT"
import AllNFT from "../components/dashboard/AllNFT"


type Props = {}

export default function Dashboard({}: Props) {
  return (
    <Box display="flex" px={5} pt={5} overflow="scroll"  h="100%"  mb={"30px"}   >
        <Box width="70%"  >
            <DashboardHero/>
            
            <AllNFT/>
            <TopNFT/>
        </Box>
        <Box>
          
        </Box>
    </Box>
  )
}
