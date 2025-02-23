import { Box, Heading, Text, VStack, List, ListItem, Stack } from "@chakra-ui/react";
import { privacyPolicyData } from "../../data/PrivacyPolicyData";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import Navbar from "../../ui/layouts/Navbar";


function PrivacyPolicy(){
  return (
    <Stack
        w="full"
        justify="start"
        align="start"
        gap="30px"
   >
     <VStack
        w="full"
        justify="start"
        align="start"
        gap="60px"
        bgColor="brand.100"
        minH="240px"
        py="20px"
        roundedBottomLeft="10rem"
     >
        <Navbar/> 

        <VStack
            w={["full", "full", "full", "40%"]}
            mx={["initial", "initial", "initial", "auto"]}
            justify="center"
            align="center"
            
        >
            
            <Heading
                fontSize={[32, 32, 40]}
                fontWeight={900}
                lineHeight="25px"
                color="white"
                textAlign="center"
            >
                Privacy Policy
            </Heading>   
        </VStack>


     </VStack>

       <ContainerLayout>
            <Box w="full" py="40px">
                <VStack spacing={6} align="start">
                    {privacyPolicyData.map((section, index) => (
                    <Box key={index}>
                        <Heading as="h2" size="md" mb={2}>
                        {section.section}
                        </Heading>
                        {Array.isArray(section.content) ? (
                        <List spacing={2} pl={4}>
                            {section.content.map((item, idx) => (
                            <ListItem key={idx}>• {item}</ListItem>
                            ))}
                        </List>
                        ) : typeof section.content === "object" ? (
                        <VStack align="start">
                            {Object.entries(section.content).map(([key, value]) => (
                            <Text key={key}>
                                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                            </Text>
                            ))}
                        </VStack>
                        ) : (
                        <Text>{section.content}</Text>
                        )}
                    </Box>
                    ))}
                </VStack>
            </Box>
       </ContainerLayout>
    </Stack>   

  );
};

export default PrivacyPolicy

