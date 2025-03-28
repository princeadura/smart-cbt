import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  Text,
  HStack,
  useBreakpointValue,
  SimpleGrid,
  Icon,
  Heading,
  Stack,
  Link,
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";
import Navbar from "../../ui/layouts/Navbar";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import { storeBtns } from "../../data/NavbarData";


function Hero() {


  
  return (
    <Stack
     w="full"
     justify="start"
     align="start"
     gap="20px"
     bgColor="brand.100"
     minH="700px"
     py="20px"
     roundedBottomLeft="10rem"
    >
        <Navbar/>

        <ContainerLayout>
            <SimpleGrid
             w="full"
             columns={[1, 1, 2]}
             gap="40px"
             pt={["2rem", "2rem", "4rem"]}
            >
                <VStack
                    w="full"
                    justify="start"
                    align="start"
                    gap="40px"
                >
                    <VStack
                        w="full"
                        justify="start"
                        align="start"
                        gap="30px"
                    >
                        <Text
                            fontSize={[18, 18, 20]}
                            fontWeight={500}
                            lineHeight="25px"
                            color="white"
                        >
                            Struggling with exam prep?
                        </Text>

                        <Heading
                            w="full"
                            fontSize={[28, 28, 32]}
                            fontWeight={700}
                            lineHeight="50px"
                            color="white"
                        >
                            <Text
                                fontWeight={900}
                                color="brand.100"
                                as="span"
                                bgColor="white"
                                py="4px"
                                px="8px"
                                mx="4px"
                            >
                                ACE CBT App
                            </Text> 
                                is your all-in-one solution for 
                            <Text
                                fontWeight={900}
                                color="brand.100"
                                as="span"
                                bgColor="white"
                                py="4px"
                                px="8px"
                                mx="4px"
                            >
                                JAMB, WAEC, and NECO 
                            </Text>

                            past questions and answers
                        </Heading>

                        <Text
                            fontSize={16}
                            fontWeight={500}
                            fontFamily="catamaran"
                            lineHeight="25px"
                            color="alt.300"
                        >
                            Helping you practice ACEer, track your progress, and boost your confidence!
                        </Text>

                    </VStack>

                    {/* Download in Google PlayStore and Apple Playstore */}
                    <HStack
                        w="full"
                        justify="start"
                        align="center"
                        gap="10px"
                    >
                        {storeBtns.map((btn, i) => (
                            <Link
                                key={i}
                                to={btn.url}
                                w={["full", "full", "full", "30%"]}
                                h="65px"
                                overflow="hidden"
                                rounded="10px"
                                border="2px solid"
                                borderColor="white"
                            >
                                <Button
                                    w="full"
                                    h="full"
                                    bgImage={btn.image}
                                    bgSize="cover"
                                    bgRepeat="no-repeat"
                                    bgPos="center"
                                    bgColor="black"
                                    color="transparent"
                                    _hover={{
                                        bgColor: "black",
                                        color: "transparent",
                                    }}
                                />
                            
                            </Link>
                        ))}
                    </HStack>

                    <AvatarGroup size='md' max={4}>
                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                    </AvatarGroup>

                </VStack>

                <VStack
                    w="full"
                    justify="center"
                    align="center"
                    minH="500px"
                    data-aos="slide-left"
                    data-aos-duration="1000"
                >
                    <Image
                     w="full"
                     h="full"
                     src="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/ACECBT/h7jq2nr6cqg5p8rjo4wi"
                     alt="mockup-image"
                     objectFit="cover"
                    />

                </VStack>

            </SimpleGrid>
        </ContainerLayout>

    </Stack>
  )
}

export default Hero
