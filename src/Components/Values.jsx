import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import AppCardValue from "./Components/AppCardValue";

const data = require("../Assets/dataValues.json");

const Values = () => {
  return (
    <Stack px="4rem" py="5rem" bg="black" color="white" id="ourValue">
      <Heading
        textTransform="uppercase"
        fontWeight="400"
        fontSize="7xl"
        mb={10}
      >
        Our values
      </Heading>
      <Box>
        <SimpleGrid columns={[1, null, 3]} spacing="60px">
          {data.map((item, index) => (
            <AppCardValue
              key={index}
              title={item.title}
              desc1={item.desc1}
              desc2={item.desc2}
              src={item.src}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Stack>
  );
};

export default Values;
