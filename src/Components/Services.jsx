import {
  Accordion,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AppAccordion from "./Components/AppAccordion";

const Services = () => {
  const data = require("../Assets/dataService.json");
  return (
    <Stack px="4rem" pt="20rem" bg="black" color="white" flexDir="column">
      <SimpleGrid columns={[1, null, 3]} spacing="60px">
        <Heading
          textTransform="uppercase"
          fontWeight="400"
          fontSize="7xl"
          id="services"
          textAlign={{base:"center", lg:"start"}}
        >
          our services
        </Heading>
        <Text fontSize="32px" textAlign={{ base: "center", lg: "start" }}>
          We’ve worked with a wide array of clients across the globe to apply
          design fundamentals of elegance, simplicity
        </Text>
        <HStack spacing={5} align="center" justify={{base:"center", lg:"end"}}>
          <Text textTransform="uppercase" fontWeight="semibold">
            view all
          </Text>
          <Image src="./VectorWhite.png" />
        </HStack>
      </SimpleGrid>

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
