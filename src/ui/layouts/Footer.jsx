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
  Input,
  Link,
} from "@chakra-ui/react";
import ContainerLayout from "./ContainerLayout";
import { socialsLinks, storeBtns, footerNavData } from "../../data/NavbarData";
import { NavLink } from "react-router-dom";



function Footer() {
  return (
    <Stack
     w="full"
     justify="start"
     align="start"
     bgColor="black"
    >
      <ContainerLayout>

        <SimpleGrid
          w="full"
          columns={[1, 1, 1, 2]}
          gap="60px"
          pt="4rem"
        >
          <VStack
            w="full"
            justify="start"
            align="start"
            gap="20px"
          >
              <Link to="/">
                  <Image
                    src="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/SmartCBT/lvf1b6i5d1tkxe6wgsbu"
                    w="250px"
                    h="40px"
                    alt="ACE-cbt-logo"
                    objectFit="contain"
                    ml={-10}
                  />   
              </Link>

              <Text
                  fontSize={16}
                  fontWeight={400}
                  lineHeight="28px"
                  color="brand.900"
              >
                Helping you practice ACEer, track your progress, and boost your confidence!
              </Text>

              <HStack
                  w="full"
                  justify="start"
                  align="center"
                  gap="10px"
              >
                  {socialsLinks.map((social, i) => (
                      <Link
                          key={i}
                          to={social.link}
                          title={social.display.toLowerCase()}
                          target="_blank"
                      >
                        <VStack
                            w="40px"
                            h="40px"
                            justify="center"
                            align="center"
                            bgColor="rgba(255, 255, 255, 0.1)"
                            rounded="full"
                            role="group"
                            _hover={{
                              bgColor: "brand.100"
                            }}
                        >
                          <Icon 
                              as={social.icon} 
                              size="20px" 
                              color="brand.100"
                              _groupHover={{
                                  color: "white",
                              }}
                          />

                        </VStack>
                      
                      </Link>
                  ))}

              </HStack>
          </VStack>


          <VStack
            w="full"
            justify={["start", "start", "end"]}
            align={["start", "start", "end"]}
            gap="20px"
          >
              <Heading
                  fontSize={20}
                  fontWeight={600}
                  lineHeight="25px"
                  color="white"
              >
                  Get the App Now!
              </Heading>

              <HStack
                  w="full"
                  justify={["start", "start", "end"]}
                  align="center"
                  gap="20px"
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

              <HStack 
                  w="full"
                  gap="20px" 
                  justify={["start", "start", "end"]}
                  align={["start", "start", "end"]}
              >
                  {footerNavData.map((item) => ((
                          <NavLink key={item.id} to={item.path}>
                              <Text
                                  fontSize={16}
                                  fontWeight={600}
                                  color="brand.900"
                                  _hover={{ color: "brand.100" }}
                              >
                                  {item.display}
                              </Text>
                          </NavLink>
                      )
                  ))}
              </HStack>
              

          </VStack>

          
        </SimpleGrid>


        <Flex
              w="full"
              justify="space-between" 
              align={["center", "center", "start"]}
              direction={["column", "column", "row"]}
              wrap={["wrap", "wrap", "nowrap"]}
              bgColor="transparent"
              py="20px"
              mt={["2rem", "2rem", "4rem"]}
              borderTop="1px solid"
              borderTopColor="rgba(255, 255, 255, 0.1)"
      >
                <Text 
                  fontSize={16}
                  fontWeight={500}
                  lineHeight="24.59px" 
                  color="brand.900" 
                  textAlign="center"
                >
                Powered by ACE CBT
              </Text>

              <Text 
                  fontSize={16}
                  fontWeight={500}
                  lineHeight="24.59px" 
                  color="brand.900" 
                  textAlign="center"
              >
                &copy; {new Date().getFullYear()} ACE CBT | All Rights Reserved
              </Text>

            </Flex>

      </ContainerLayout>

    </Stack>
  )
}

export default Footer
