import {  Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const AppCardValue = ({title, desc1, desc2, src}) => {
  return (
        <Stack color="#c4c4c4" fontSize="28px" spacing={10}>
            <Text>{title}</Text>
            <Flex border='1px solid gray' p={10} align="center" justify="center">
                <Image src={src}/>
            </Flex>
            <Text>{desc1}</Text>
            <Text>{desc2}</Text>
        </Stack>
  )
}

export default AppCardValue