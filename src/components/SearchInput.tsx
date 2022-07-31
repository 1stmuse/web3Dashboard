import { Box, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import colors from '../utils/colors'
import {ReactComponent as Search} from "../assets/icons/search.svg"

type Props = {}

export default function SearchInput({}: Props) {
  return (
    <Flex bg={colors.light_border} alignItems="center" rounded="base" >
       <InputGroup border="none" >
    <InputLeftElement
      pointerEvents='none'
      children={<Search />}
    />
    <Input border="none" type='text' placeholder='Search' />
  </InputGroup>
    </Flex>
  )
}