import {
  Text,
  Box,
  Image,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
  HStack,
} from "@chakra-ui/react";
import { style } from "../styles";
import { portfolioInitial } from "../data";

const PortfolioPage = () => {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em" sx={style.tabs.tabsList}>
        <Tab sx={style.tabs.tab}>Web Designs</Tab>
        <Tab sx={style.tabs.tab}>Websites</Tab>
        <Tab sx={style.tabs.tab}>Graphic Designs</Tab>
      </TabList>
      <TabPanels sx={style.tabs.tabsPanel}>
        <TabPanel>
          <HStack
            spacing="15px"
            flexWrap={"wrap"}
            justifyContent={"center"}
            width={"auto"}
          >
            {portfolioInitial["webdesign"].map((item) => (
              <Box key={item.id} sx={style.image.imageSiteBox}>
                <Image boxSize="auto" src={item.imageUrl} alt="" />
                <Box sx={style.image.imageDetails}>
                  <Text sx={style.image.heading}>{item.title}</Text>
                  <Text sx={style.image.subHeading}>{item.details}</Text>
                </Box>
              </Box>
            ))}
          </HStack>
        </TabPanel>
        <TabPanel>
          <HStack
            spacing="15px"
            flexWrap={"wrap"}
            justifyContent={"center"}
            width={"auto"}
          >
            {portfolioInitial["website"].map((item) => (
              <Box key={item.id} sx={style.image.imageSiteBox}>
                <Image boxSize="auto" src={item.imageUrl} alt="" />
                <Box sx={style.image.imageDetails}>
                  <Text sx={style.image.heading}>{item.title}</Text>
                  <Text sx={style.image.subHeading}>{item.details}</Text>
                </Box>
              </Box>
            ))}
          </HStack>
        </TabPanel>
        <TabPanel sx={style.tabs.tabPanel}>
          <HStack
            spacing="15px"
            flexWrap={"wrap"}
            justifyContent={"center"}
            width={"auto"}
          >
            {portfolioInitial["graphics"].map((item) => (
              <Box key={item.id} sx={style.image.imageBox}>
                <Image boxSize="auto" src={item.imageUrl} alt="" />
              </Box>
            ))}
          </HStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default PortfolioPage;
