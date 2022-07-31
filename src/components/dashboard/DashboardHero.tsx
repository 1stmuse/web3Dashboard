import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import HeroImage from "../../assets/images/hero.png"
import colors from '../../utils/colors'
import Button from '../Button'
import Text from '../Text'

type Props = {}

export default function DashboardHero({}: Props) {
  return (
    <Box display="flex" boxShadow="lg" alignItems="center" backgroundImage={HeroImage} borderBottomLeftRadius={10} borderBottomRadius={10} w="100%" bgBlendMode="screen"  bgRepeat="no-repeat" bgSize="cover" h={250} >
        <Box ml={10}>
            <Text fontSize={"4xl"} fontWeight="bold"  color={colors.white} >
            Create your own NFT
            </Text>
            <Text color={colors.white} >The world largest digital marketplace for NFTs</Text>
            <Flex mt={10}>
                <Button _hover={{
                    bg: colors.white,
                    color: colors.blue
                }}  fontWeight="bold" color={colors.white} mr={2} borderRadius={2} border="1px" borderColor={colors.white} >
                    Create Yours
                </Button>
                <Button _hover={{
                    bg: colors.white,
                    color: colors.blue
                }} color={colors.white} fontWeight="bold" borderRadius={2} border="1px" borderColor={colors.white}
                >
                    Discover More
                </Button>
            </Flex>
        </Box>
    </Box >
  )
}