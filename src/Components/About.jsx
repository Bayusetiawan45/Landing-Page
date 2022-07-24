import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AppButton from "./Components/AppButton";

const About = () => {
  return (
    <Stack px="4rem" py="5rem" bg="black" id="aboutUs">
      <Stack justify="space-between" color="white" flexDirection="row" pos='relative' top="-12rem">
        <Stack spacing={5}>
          <Heading textTransform="uppercase" fontWeight="400" fontSize="7xl" color="black" mb={10}>
            About
          </Heading>
          <Text fontSize="18px" maxW="40rem">
            Wolven D.O.O. is a small digital agency based in Serbia. Founder
            Dave McGowan decided to go into business for himself, using his vast
            experience in software engineering and numerous ancillary fields to
            help people perfect their web presence and get seen.
          </Text>
          <Text fontSize="18px" maxW="40rem">
            In setting up the company, he was able to rely on his vast
            experience from previous entrepreneurial activities and therefore
            knows what matters
          </Text>
          <Box>
            <AppButton label="See More" />
          </Box>
        </Stack>
        <Box>
        <Image src="./8.png" />
        </Box>
      </Stack>
    </Stack>
  );
};

export default About;
