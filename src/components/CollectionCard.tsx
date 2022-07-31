
import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import colors from '../utils/colors'
import {nfts, NFTs, collection} from "../utils/helpers"
import Text from './Text'

interface Props extends nfts {}

export default function CollectionCard(props: Props) {
    const nft: nfts = NFTs[0]

    const Chip = () => (
        <Box borderRadius={6} px={2} bg={colors.light_blue} display="flex" justifyContent={"center"} alignItems="center" >
            <Text fontWeight={"bold"} color={colors.blue} fontSize={8}>OpenSea</Text>
        </Box>
    )

  return (
    <Box _hover={{
        transform: "scale(1.05)"
    }}
        transition="all"
        transitionDuration=".3s"
     w={180} mb={5} mr={5} mt={5} bg={colors.white} px={2} py={3} shadow="base" borderRadius={10} >
        <Box  >
        <Image src={props.ntfs1} height={150} />
        </Box>
        <Box mt={3}>
            <Flex justifyContent={"space-between"}>
                <Text fontSize={12} >{props.name}</Text>
                <Chip/>
            </Flex>
            <Flex mt={3} justifyContent={"space-between"}>
                <Text color={colors.gray} fontSize={12} >{props?.author}</Text>
                <Flex alignItems="center" >
                <Image src={props.network} mr={1} w={3} />
                <Text color={colors.black} fontSize={10} >{props.bid}</Text>
                </Flex>
            </Flex>            
        </Box>

    </Box>
  )
}