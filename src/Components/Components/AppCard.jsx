import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";

const AppCard = ({ name, position, dir, src }) => {
  return (
    <Box
      shadow="sm"
      _hover={{ shadow: "lg", transform: "translateY(-1px)" }}
      bg="#fffe55"
      height="max-content"
      w="max-content"
    >
      <Image maxW="100%" src={src} />
      <Stack flexDir={dir} p={5}>
        <Text fontWeight="bold" fontSize="26px" textTransform="capitalize">
          {name}
        </Text>
        <Text textTransform="capitalize" fontSize="1rem">
          {position}
        </Text>
        <HStack spacing={5}>
          <FaLinkedin />
          <FaFacebookF />
          <FaTwitter />
        </HStack>
      </Stack>
    </Box>
  );
};

export default AppCard;
