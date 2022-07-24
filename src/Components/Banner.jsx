import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <Flex
      px="4rem"
      pt={10}
      backgroundImage="url('./Banner.png')"
      backgroundRepeat="no-repeat"
      id="home"
    >
      <Box>
        <Flex
          bg="black"
          w="144px"
          height="282px"
          align="center"
          justify="center"
        >
          <Image src="./logo.png" />
        </Flex>
        <HStack justify="space-between">
          <Heading
            textTransform="uppercase"
            pos="relative"
            bottom="-7rem"
            fontWeight="400"
            maxW="70vw"
            fontSize="8xl"
          >
            we assist you in solving tomorrow’s <br/>
            <span style={{ color: "white" }}>problems today</span>
          </Heading>
          <HStack pos="relative" bottom="-7rem" spacing={5} align="end">
            <Text textTransform="uppercase" fontWeight="semibold">
              about us
            </Text>
            <Image src="./Vector.png" />
          </HStack>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Banner;
