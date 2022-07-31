import { 
    Box,
     Flex,
    // Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,

} from '@chakra-ui/react'
import React from 'react'
import SearchInput from './SearchInput'
import { ReactComponent as Ethereum} from "../assets/icons/ethereum.svg"
import { ChevronDownIcon } from "@chakra-ui/icons"
import colors from '../utils/colors'
import Text from "../components/Text"

type Props = {}

export default function Header({}: Props) {
  return (
    <Flex h={70} borderBottom="1px" borderColor={colors.border} alignItems="center" justifyContent="space-between" px="2"  >
        <SearchInput/>
        <Box display="flex" alignItems="center" >
            <Text fontSize="xs">Network:</Text>
            <Box mx="2">
            <Menu>
                <MenuButton rightIcon={<ChevronDownIcon />}  as={Button} > 
                    <Box display="flex" alignItems="center" >
                    <Ethereum/>
                    <Text fontSize="xs">Ethereum</Text>
                    </Box>
                 </MenuButton>
                 <MenuList>
                     <MenuItem>
                        <Box h={40} w="100%" >
                            <Text>hello boss</Text>
                        </Box>
                     </MenuItem>
                 </MenuList>
            </Menu>
            </Box>
            <Box py="2" textAlign="center" w={120} bg={ `linear-gradient(to right, ${colors.blue} , ${colors.purpleIsh})`} >
                <Text color={colors.white} fontSize="xs">Connect Wallet</Text>
            </Box>
        </Box>
    </Flex>
  )
}