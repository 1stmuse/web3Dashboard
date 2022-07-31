import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import CollectionCard from '../components/CollectionCard'
import Text from '../components/Text'
import {NFTs} from "../utils/helpers"

type Props = {}

export default function Portfolio({}: Props) {
  return (
    <Box mt={5} px={10} >
    <Flex align="baseline">
      <Text fontSize='2xl' mr={2} >My Collections</Text>
      <Text  >Created</Text>
      <Text>Favourites</Text>
    </Flex>
    <Flex wrap="wrap" mt={2}>
      {NFTs.map((nf) => <CollectionCard {...nf} />)}
    </Flex>
  </Box>
  )
}