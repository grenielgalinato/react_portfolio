import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Header from "./Header";

type LayoutProps = {
  children: string | JSX.Element | JSX.Element[];
};

const styles = {
  box: {
    width: "100%",
    minHeight: "100vh",
    fontFamily: "Kumbh Sans, sans-serif",
  },
  container: {
    margin: "0 auto",
  },
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Box sx={styles.box} color={useColorModeValue("#ffffff", "#003036")}>
        <Container maxW="container.xl" sx={styles.container}>
          <Header />
          {children}
        </Container>
      </Box>
    </>
  );
}

export default Layout;
