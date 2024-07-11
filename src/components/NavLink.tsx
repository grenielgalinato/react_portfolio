import { Link, useColorModeValue } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

interface Props {
  path: string;
  children?: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { children, path } = props;

  return (
    <Link
      as={ReactRouterLink}
      px={2}
      py={2}
      color={useColorModeValue("#ffffffb3", "#191919")}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.700", "gray.200"),
      }}
      to={path}
      target="_blank"
    >
      {children}
    </Link>
  );
};

export default NavLink;
