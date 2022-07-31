import { Box, ButtonGroup, Flex } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import React from 'react'
import Button from '../Button'
import Text from "../Text"
import colors from '../../utils/colors'
import NFTCard from '../NFTCard'
import { NFTs } from '../../utils/helpers'


type Props = {}

const TopNFT = (props: Props) => {
    const [index, setIndex] = React.useState<number>(0)
    const nft = NFTs[0]

    const paginate = (ind: number) => {
        setIndex(ind)
    }

  return (
    <Box mt="3">
        <Flex justifyContent="space-between" alignItems="baseline" >
            <Flex alignItems="baseline" >
            <Text color={colors.black} fontWeight="bold" fontSize={"2xl"} >ALL NFTs</Text>
            <Text>23000</Text>
            </Flex>
            <Flex>
                <Button onClick={() => paginate(0)}  mr={2}  bg={index === 0 ? colors.blue : colors.border} borderRadius={8} >
                    <ChevronLeftIcon color={index === 0 ? colors.white : colors.black} />
                </Button>
                <Button onClick={() => paginate(1)} bg={index === 1 ? colors.blue : colors.border}  borderRadius={8} >
                <ChevronRightIcon color={index === 1 ? colors.white : colors.black}  />
                </Button>
            </Flex>
        </Flex>
        <Flex flexWrap={"wrap"} >
            <NFTCard {...nft} />
            <NFTCard {...NFTs[1]} />
            <NFTCard {...NFTs[2]} />
            <NFTCard {...NFTs[4]} />
            <NFTCard {...NFTs[2]} />
        </Flex>
    </Box>
  )
}

export default TopNFT