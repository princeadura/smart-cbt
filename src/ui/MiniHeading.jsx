import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function MiniHeading({ isCenter, miniTitle, title, color }) {
  return (
    <VStack
        w={isCenter ? ["full", "full", "full", "50%"] : "full"}
        mx={isCenter ? ["initial", "initial", "initial", "auto"] : "initial"}
        justify={isCenter ? "center" : "start"}
        align={isCenter ? "center" : "start"}
        gap="24px"
    >


        <Text
            fontSize={14}
            fontWeight={600}
            color="brand.100"
            lineHeight="24px"
            textAlign="center"
            textTransform="uppercase"
        >
            {miniTitle}
        </Text>



        <Heading
            fontSize={[30, 36, 40, 44]}
            fontWeight={900}
            color={color ? color : "black"}
            lineHeight={["40px", "40px", "44px"]}
            textAlign={isCenter ? "center" : "start"}
        >
            {title}
        </Heading>



    </VStack>
  )
}

export default MiniHeading
