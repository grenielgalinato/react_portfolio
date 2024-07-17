import { Box, Text, Link, Image, useColorMode } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Image404Light from "../assets/Page404Light.svg";
import Image404Dark from "../assets/Page404Dark.svg";
import { style } from "../styles";

const PageNotFound: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Box sx={style.pageDesign.container}>
      <Box sx={style.pageDesign.box}>
        <Image
          sx={style.pageDesign.image}
          src={colorMode === "light" ? Image404Light : Image404Dark}
        />
        <Text sx={style.pageDesign.heading}>Ooops! Page Not Found</Text>
        <Text sx={style.pageDesign.subHeading}>
          The page your looking for does not exist, or maybe I'm the problem?
        </Text>
        <Link as={ReactRouterLink} to="/" sx={style.pageDesign.link}>
          Go Back to HomePage
        </Link>
      </Box>
    </Box>
  );
};

export default PageNotFound;
