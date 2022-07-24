import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import AppPortfolioItem from "./Components/AppPortfolioItem";

const data = require("../Assets/dataPortfolioItem.json");

const Portfolio = () => {
  return (
    <Stack px="4rem" py="10rem" flexDir="column" id="portfolio">
      <Flex justify="space-between" mb={5}>
        <Heading textTransform="uppercase" fontWeight="400" fontSize="7xl">
          Portfolio
        </Heading>
        <HStack spacing={5}>
          <Text fontSize="18px" maxW="40rem">
            Take a look at our most successful projects and see for yourself our
            skills and the results that speak for themselves.
          </Text>
          <ArrowBackIcon />
          <ArrowForwardIcon />
        </HStack>
      </Flex>
      {data.map((item, index) => (
        <AppPortfolioItem
          key={index}
          title={item.title}
          projectName={item.projectName}
          list1={item.list1}
          list2={item.list2}
          list3={item.list3}
          list4={item.list4}
          src={item.src}
          dir={item.dir}
        />
      ))}
    </Stack>
  );
};

export default Portfolio;
