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
import { portfolioData } from "../data";

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
          <Box sx={style.tabs.tabBox}>
            <Text sx={style.tabs.tabHeading}>
              Web Designs (Wireframe, UI and UX) created for previous clients
            </Text>
            <HStack
              spacing="15px"
              flexWrap={"wrap"}
              justifyContent={"center"}
              width={"auto"}
            >
              {portfolioData["webdesign"]
                .filter((item) => item.category === "client")
                .map((item) => (
                  <Box key={item.id} sx={style.image.imageSiteBox}>
                    <Image boxSize="auto" src={item.imageUrl} alt="" />
                    <Box sx={style.image.imageDetails}>
                      <Text sx={style.image.heading}>{item.title}</Text>
                      <Text sx={style.image.subHeading}>{item.details}</Text>
                    </Box>
                  </Box>
                ))}
            </HStack>
          </Box>
          <Box sx={style.tabs.tabBox}>
            <Text sx={style.tabs.tabHeading}>Personal Web Design Projects</Text>
            <HStack
              spacing="15px"
              flexWrap={"wrap"}
              justifyContent={"center"}
              width={"auto"}
            >
              {portfolioData["webdesign"]
                .filter((item) => item.category === "personal")
                .map((item) => (
                  <Box key={item.id} sx={style.image.imageSiteBox}>
                    <Image boxSize="auto" src={item.imageUrl} alt="" />
                    <Box sx={style.image.imageDetails}>
                      <Text sx={style.image.heading}>{item.title}</Text>
                      <Text sx={style.image.subHeading}>{item.details}</Text>
                    </Box>
                  </Box>
                ))}
            </HStack>
          </Box>
        </TabPanel>
        <TabPanel>
          <HStack
            spacing="15px"
            flexWrap={"wrap"}
            justifyContent={"center"}
            width={"auto"}
          >
            {portfolioData["website"].map((item) => (
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
          <Box sx={style.tabs.tabBox}>
            <Text sx={style.tabs.tabHeading}>
              Graphic Designs Previous Created for a client
            </Text>
            <HStack
              spacing="15px"
              flexWrap={"wrap"}
              justifyContent={"center"}
              width={"auto"}
            >
              {portfolioData["graphics"]
                .filter((item) => item.category === "client")
                .map((item) => (
                  <Box key={item.id} sx={style.image.imageBox}>
                    <Image boxSize="auto" src={item.imageUrl} alt="" />
                  </Box>
                ))}
            </HStack>
          </Box>
          <Box sx={style.tabs.tabBox}>
            <Text sx={style.tabs.tabHeading}>
              Graphic Designs Previous Created for a client
            </Text>
            <HStack
              spacing="15px"
              flexWrap={"wrap"}
              justifyContent={"center"}
              width={"auto"}
            >
              {portfolioData["graphics"]
                .filter((item) => item.category === "client-prints")
                .map((item) => (
                  <Box key={item.id} sx={style.image.imageBox}>
                    <Image boxSize="auto" src={item.imageUrl} alt="" />
                  </Box>
                ))}
            </HStack>
          </Box>
          <Box sx={style.tabs.tabBox}>
            <Text sx={style.tabs.tabHeading}>Personal Graphic Designs</Text>
            <HStack
              spacing="15px"
              flexWrap={"wrap"}
              justifyContent={"center"}
              width={"auto"}
            >
              {portfolioData["graphics"]
                .filter((item) => item.category === "personal")
                .map((item) => (
                  <Box key={item.id} sx={style.image.imageBox}>
                    <Image boxSize="auto" src={item.imageUrl} alt="" />
                  </Box>
                ))}
            </HStack>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default PortfolioPage;
