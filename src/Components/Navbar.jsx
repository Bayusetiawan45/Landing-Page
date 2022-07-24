import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";

const link = require("../Assets/dataLink.json");

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex px="4rem" pt={10} right="0" pos="absolute">
      <Flex h={16} alignItems={"center"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"start"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {link.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
              >
                <Text _hover={{ color: "#ffd600" }} fontSize="1.2rem" fontWeight="semibold" color="white" cursor="pointer">
                  {link.label}
                </Text>
              </Link>
            ))}
          </HStack>
          <Box bg="#fffe55" p={5} fontSize="1.2rem" fontWeight="semibold">
            (021) 8583944
          </Box>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {link.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
              >
                <Text _hover={{ color: "#fffa44" }} cursor="pointer">
                  {link.label}
                </Text>
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Flex>
  );
}
