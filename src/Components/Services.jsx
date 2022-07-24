import {
  Accordion,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AppAccordion from "./Components/AppAccordion";

const Services = () => {
  const data = require("../Assets/dataService.json");
  return (
    <Stack px="4rem" pt="20rem" bg="black" color="white" flexDir="column" >
      <HStack spacing={10} justify="space-between">
        <HStack my="10rem" spacing="15rem" maxW="67vw">
          <Heading textTransform="uppercase" fontWeight="400" fontSize="7xl" id="services">
            our services
          </Heading>
          <Text fontSize="32px">
            We’ve worked with a wide array of clients across the globe to apply
            design fundamentals of elegance, simplicity
          </Text>
        </HStack>
        <HStack spacing={5} align="end">
          <Text textTransform="uppercase" fontWeight="semibold">
            view all
          </Text>
          <Image src="./VectorWhite.png" />
        </HStack>
      </HStack>
      <Accordion allowMultiple>
        {data.map((item, index) => (
          <AppAccordion
            key={index}
            Title={item.title}
            Description={item.description}
            Item={item.item}
          />
        ))}
      </Accordion>
    </Stack>
  );
};

export default Services;
