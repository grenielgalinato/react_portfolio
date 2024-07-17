import { Box, Text, Link, Image, useColorMode } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import ImageBuildingLight from "../assets/PageConstructionLight.svg";
import ImageBuildingDark from "../assets/PageConstructionDark.svg";
import { style } from "../styles";

const PageBuilding: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Box sx={style.pageDesign.container}>
      <Box sx={style.pageDesign.box}>
        <Image
          sx={style.pageDesign.image}
          src={colorMode === "light" ? ImageBuildingLight : ImageBuildingDark}
        />
        <Text sx={style.pageDesign.heading}>Wait! To Launch Very Soon</Text>
        <Text sx={style.pageDesign.subHeading}>
          This page is under construction. Please be patient.
        </Text>
        <Link as={ReactRouterLink} to="/" sx={style.pageDesign.link}>
          Go Back to HomePage
        </Link>
      </Box>
    </Box>
  );
};

export default PageBuilding;
