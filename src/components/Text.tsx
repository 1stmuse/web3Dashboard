import React from 'react'
import {Text as MyText, TextProps} from "@chakra-ui/react"

interface Props extends TextProps  {
    children: any,
    // fontSize?: string | number
} 

export default function Text(props: Props) {
  return (
    <MyText {...props} > {props.children} </MyText>
  )
}