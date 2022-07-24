import {
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";

const link = require("../Assets/dataLink.json");

const Footer = () => {
  return (
    <Stack px="4rem" py="5rem" bg="#fffe55">
      <SimpleGrid columns={[2, null, 6]} spacing="60px">
        <Flex
          bg="black"
          w="144px"
          height="282px"
          align="center"
          justify="center"
        >
          <Image src="./logo.png" />
        </Flex>
        <Flex fontSize="28px" transform="rotate(-90deg)" justify="center">
          (021) 8583944
        </Flex>
        <Stack>
          <Text fontWeight="semibold" fontSize="20px" mb={5}>
            Quick Links
          </Text>
          {link.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
              >
                <Text _hover={{ bg:"black", color: "#fffa44" }} p={1} cursor="pointer">
                  {link.label}
                </Text>
              </Link>
            ))}
        </Stack>
        <Stack>
          <Text fontWeight="semibold" fontSize="20px" mb={5}>
            Follow
          </Text>
          <Text fontSize="20px">Facebook</Text>
          <Text fontSize="20px">Twitter</Text>
          <Text fontSize="20px">Instagram</Text>
          <Text fontSize="20px">LinkedIn</Text>
        </Stack>
        <Stack>
          <Text fontWeight="semibold" fontSize="20px" mb={5}>
            Sign up to our news letter
          </Text>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input type="email" />
          </FormControl>
          <Text fontSize="15px">
            This site is protected by reCAPTHCHA and the Google Privacy Policy
            and Terms of Service apply.
          </Text>
        </Stack>
        <Image src="./Vector.png"/>
      </SimpleGrid>
      <Divider fontWeight="bold"/>
      <Flex justify="space-between" mt={10}>
        <Text fontSize="15px">© Dipstrategy 2022. All Rights Resevered</Text>
        <Text fontSize="15px">Privacy Policy</Text>
      </Flex>
    </Stack>
  );
};

export default Footer;
