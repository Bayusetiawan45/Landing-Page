import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import AppButton from "./Components/AppButton";
import AppCard from "./Components/AppCard";

const data = require("../Assets/dataTeam.json");

const Team = () => {
  return (
    <Stack px="4rem" py="5rem">
      <Stack
        justify="space-between"
        flexDirection="row"
        pos="relative"
        top="-12rem"
      >
        <Stack spacing={5}>
          <Heading
            textTransform="uppercase"
            fontWeight="400"
            fontSize="7xl"
            color="white"
            mb={10}
          >
            Our Magic Team
          </Heading>
          <Text fontSize="18px" maxW="75%">
            Wolven D.O.O. is a small digital agency based in Serbia. Founder
            Dave McGowan decided to go into business for himself, using his vast
            experience in software engineering and numerous ancillary fields to
            help people perfect their web presence and get seen.
          </Text>
          <Text fontSize="18px" maxW="75%">
            In setting up the company, he was able to rely on his vast
            experience from previous entrepreneurial activities and therefore
            knows what matters
          </Text>
        </Stack>
        <Box>
          <AppButton label="See More" />
        </Box>
      </Stack>
      <SimpleGrid columns={[1, null, 4]} spacing="40px">
        {data.map((item, index) => (
          <AppCard
            key={index}
            name={item.name}
            position={item.position}
            src={item.src}
            dir={item.dir}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Team;
