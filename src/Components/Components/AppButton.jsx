import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";

const AppButton = ({ label }) => {
  return (
    <Button
      rightIcon={<ExternalLinkIcon />}
      bg="#fffe55"
      color="black"
      rounded="none"
    >
      {label}
    </Button>
  );
};

export default AppButton;
