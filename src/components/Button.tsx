import { Box,  BoxProps } from '@chakra-ui/react'
import React from 'react'

interface Props extends BoxProps {
    children: any
}

export default function Button(props: Props) {
  return (
    <Box  cursor="pointer" py={2} px={4} {...props} >{props.children}</Box>
  )
}