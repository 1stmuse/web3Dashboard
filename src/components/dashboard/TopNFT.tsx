import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Flex,
    Image
  } from '@chakra-ui/react'

import Text from "../Text"
import colors from '../../utils/colors'
import { collections } from "../../utils/helpers"

type Props = {}

export default function TopNFT({}: Props) {
  return (
    <Box mt={5} pb="100px"  >
        <Flex justifyContent="space-between" alignItems="baseline" >
            <Flex alignItems="baseline" >
            <Text color={colors.black} fontWeight="bold" fontSize={"2xl"} >ALL NFTs</Text>
            <Text>23000</Text>
            </Flex>
            <Box>
                <Text fontWeight="bold" color={colors.purpleIsh}>See All</Text>
            </Box>
        </Flex>

        <TableContainer mt={5} border="1px" borderRadius={8} borderColor={colors.border}>
            <Table variant="simple"  >
                <Thead>
                    <Tr h="16">
                        <Th >Collection</Th>
                        <Th py={2}>Volume</Th>
                        <Th>24h %</Th>
                        <Th py={2}>Owners</Th>
                        <Th py={2}>Items  </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {collections.map((cl) => <Tr>
                        <Td>
                            <Image w={5} src={cl.profileImg} />
                        </Td>
                        <Td>{cl.volume}</Td>
                        <Td>{cl.percent}</Td>
                        <Td>{cl.owners}</Td>
                        <Td>{cl.items}</Td>
                    </Tr>).slice(0, 5)}
                </Tbody>
            </Table>
        </TableContainer>

    </Box>
  )
}