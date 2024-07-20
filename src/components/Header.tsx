import { Link as ReactRouterLink } from "react-router-dom";
import {
  Box,
  Link,
  Text,
  Flex,
  HStack,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import LogoLight from "../assets/logo-light.svg";
import LogoDark from "../assets/logo-dark.svg";

interface Props {
  path: string;
  children: React.ReactNode;
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "70px",
    background: "transparent",
    padding: "20px 0",
    "@media screen and (max-width: 768px)": {
      padding: "20px",
    },
  },
  headerBox: {
    top: "0",
    position: "sticky",
    py: "15px",
    zIndex: "99",
    "@media screen and (max-width: 768px)": {
      padding: "20px",
    },
  },
  heading: {
    main: {
      fontSize: "20px",
      fontWeight: "500",
      "@media screen and (max-width: 768px)": {
        display: "none",
      },
    },
  },
  menu: {
    main: {
      display: "flex",
      gap: "20px",
    },
    link: {
      fontSize: "16px",
      fontWeight: "500",
    },
  },
};

const Links = [
  { path: "/", text: "Home" },
  { path: "/portfolio", text: "Portfolio" },
  // { path: '/about-me', text: 'About Me' },
];

const NavLink = (props: Props) => {
  const { children, path } = props;

  return (
    <Link
      as={ReactRouterLink}
      px={2}
      py={2}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.700", "gray.200"),
      }}
      sx={styles.menu.link}
      to={path}
    >
      {children}
    </Link>
  );
};

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("#191919", "#F4F4F4")} sx={styles.headerBox}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="/" as={ReactRouterLink}>
              <Image
                src={colorMode === "light" ? LogoLight : LogoDark}
                alt="grenielgalinato.com logo"
                sx={{ width: "40px", height: "40px", marginRight: "20px" }}
              />
            </Link>
            <Text sx={styles.heading.main}>Greniel Galinato • Portfolio</Text>
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
              <HStack
                as={"nav"}
                spacing={2}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link.text} path={link.path}>
                    {link.text}
                  </NavLink>
                ))}
              </HStack>
              <Button
                onClick={toggleColorMode}
                bg={"transparent"}
                color={useColorModeValue("#ffffff", "#003036")}
                _hover={{
                  bg: useColorModeValue("gray.700", "gray.200"),
                }}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.path} path={link.path}>
                  {link.text}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Header;
