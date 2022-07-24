import {
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import AppButton from "./Components/AppButton";

const Contact = () => {
  return (
    <Stack px="4rem" py="5rem">
      <SimpleGrid columns={[1, null, 2]} spacing="60px">
        <Stack>
          <Heading
            textTransform="uppercase"
            fontWeight="400"
            fontSize="7xl"
            mb={10}
          >
            Contact
          </Heading>
          <Text fontSize="24px">
            Jl. Slamet Riyadi No.7, RT.1/RW.4, Kb. Manggis, Kec. Matraman, Kota
            Jakarta Timur, Daerah Khusus Ibukota Jakarta 13150
          </Text>
          <Text fontSize="40px">(021) 8583944</Text>
          <Text fontSize="40px">info@DIPSTRATEGY.com</Text>
          <HStack spacing={5}>
            <Text fontSize="15px">Facebook</Text>
            <Text fontSize="15px">Twitter</Text>
            <Text fontSize="15px">Instagram</Text>
            <Text fontSize="15px">LinkedIn</Text>
          </HStack>
        </Stack>
        <Stack spacing={5}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea />
          </FormControl>
          <Box>
            <AppButton label="Submit" />
          </Box>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};

export default Contact;
