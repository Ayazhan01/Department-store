import React from "react";
import { Box, Button, Center, Flex, Heading, Image, Input, SimpleGrid, Text, } from "@chakra-ui/react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FcPhoneAndroid } from "react-icons/fc";
import { BsFillSuitHeartFill } from "react-icons/bs";
import "./Footer.css"
const Footer = () => {
   return (
      <Box>

         <Box mt={"25px"} width={"100%"} h="40px" bg={"gray.100"}></Box>

         <Box className="footer_head" width={"100%"} bg={"gray.700"}>
            <SimpleGrid margin={"auto"} padding="30px" width={"80%"} columns={[2, 2, 3]} color={"white"}>
               <Box>
                  <Text as="h5" fontSize={["sm", "md", "lg"]} fontWeight={"500"}>
                     <i style={{ fontSize: "23px" }} className="fa fa-envelope" aria-hidden="true"></i>
                     Get special discount on your inbox
                  </Text>
                  <br />
                  <Flex alignItems={"center"} >
                     <Input width={"180px"} borderRadius={"none"} color={"white"} border={"none"} borderBottom={"1px solid white"} placeholder="Your Email" />
                     <Button ml={"10px"} borderRadius={"none"} colorScheme="White" variant="outline" className="footer_btn">
                        Send
                     </Button>
                  </Flex>
               </Box>
               <Box>
                  <Flex alignItems={"center"} gap="10px">
                     <Text fontSize={"4xl"}>
                        <FcPhoneAndroid />
                     </Text>
                     <Text as="h5" fontSize={["sm", "md", "lg"]} fontWeight={"500"}>
                        EXPERIENCE THE MOBILE APP
                     </Text>
                  </Flex >
                  <Flex alignItems={"center"} className="payStoreBtn">
                     <Image width={"150px"} src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png?hl=fr" alt="avtar" />
                     <Image borderRadius={"6px"} width={"120px"} src="https://e7.pngegg.com/pngimages/2/670/png-clipart-logo-app-store-font-brand-product-app-store-play-store-text-logo.png" alt="avtar" />
                  </Flex>
               </Box>
               {/* <Box className="footerdown">
                  <Flex alignItems={"center"} gap="10px">
                     <Text fontSize={["md","lg","3xl"]} >
                        <BsFillTelephoneFill />
                     </Text>
                     <Text as="h5" fontSize={["sm","md","lg"]} fontWeight={"500"}>
                        FOR ANY HELP, YOU MAY CALL US AT 1800-267-4444
                     </Text>
                  </Flex>
                  <Text ml={"40px"} as="h5" fontSize={["sm","md","lg"]}>
                     (Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)
                  </Text>
               </Box> */}
            </SimpleGrid>
         </Box>


         <Box width={"100%"} h="30px" bg={"red.500"} color="white" fontSize={"sm"} fontWeight="bold" display={"flex"} alignItems="center" justifyContent={"center"} gap="5px"><BsFillSuitHeartFill /> Made by Ayazhan Marikova</Box>
      </Box>
   );
};

export default Footer;
