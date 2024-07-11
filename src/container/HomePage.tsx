import {
  Box,
  Text,
  Link,
  Button,
  useColorModeValue,
  Image,
  useColorMode,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
} from "@chakra-ui/react";
import { Links } from "../data";
import { LinkIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import SideNav from "../components/SideNav";
import NavLink from "../components/NavLink";
import DataPill from "../components/DataPill";
import DataExp from "../components/DataExp";
import DataCert from "../components/DataCert";
import { style } from "../styles";

const HomePage: React.FC = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("#ffffffb3", "#191919");
  const bgButton = useColorModeValue("transparent", "#ffffffb3");
  const bgColor = useColorModeValue(
    "rgba(255, 255, 255, 0.07)",
    "rgba(0, 0, 0, 0.2)"
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={style.box.boxContentLeft}>
        <Box sx={style.box.boxContentLeftHead}>
          <Text sx={style.heading.heading1}>Greniel Galinato</Text>
          <Text sx={style.heading.subHeading1} color={textColor}>
            Web Developer @ Sence1 Inc.
          </Text>
        </Box>
        <Box>
          <SideNav />
        </Box>
        <Box sx={style.box.boxContentLeftBottom}>
          {Links.map((link) => (
            <NavLink key={link.text} path={link.path}>
              <Image
                sx={style.box.boxAvatar}
                src={colorMode === "light" ? link.imageLight : link.imageDark}
              />
            </NavLink>
          ))}
        </Box>
      </Box>
      <Box sx={style.box.boxContentRight}>
        <Box sx={style.box.boxContentRightContainer} id="overview">
          <Box
            sx={style.box.boxHeading}
            bg={useColorModeValue(
              "rgba(255, 255, 255, 0.07)",
              "rgba(0, 0, 0, 0.2)"
            )}
          >
            <Text sx={style.heading.heading2}>Overview</Text>
          </Box>
          <Box sx={style.box.boxText}>
            <Text sx={style.text.normal}>
              Hi! Thank you for visiting my online portfolio and browsing my
              credentials. I hope my details fit with what your company is
              looking for.
            </Text>
            <Text sx={style.text.normal}>
              As a small background, I'm currently working my best as a software
              engineer at SENCE1 INC., formerly CREATIVEHOPE PH INC. I started
              my "real" development career in October 2021, working as a junior
              web developer. Prior to my dev job, I worked as a game master or
              game support specialist at IGS&C, handling Netmarble Games Korea.
              For a short while, I tried freelancing as a web and graphic
              designer, which led me to my current position as I keep pushing
              myself to become a developer.
            </Text>
            <Text sx={style.text.normal}>
              Currently, I am proud that I have a solid foundation in web
              development (HTML, CSS, JS, and JQuery). I also have enough
              knowledge in terms of software development, software lifecycle,
              design, and architecture. It's not yet solid, but I'm going there.
              I worked with different technologies, like using Rails and React
              to build our HQ referral marketing system, and many more, which
              you can find in my portfolio.
            </Text>
            <Text sx={style.text.normal}>
              Sorry for writing quite a lot. <br />
              Again, thank you, and looking forward to connecting with you. you.
              <br />
              <br />
              Regards, <br />
              Greniel Galinato
            </Text>
          </Box>
        </Box>
        <Box sx={style.box.boxContentRightContainer} id="skill-summary">
          <Box
            sx={style.box.boxHeading}
            bg={useColorModeValue(
              "rgba(255, 255, 255, 0.07)",
              "rgba(0, 0, 0, 0.2)"
            )}
          >
            <Text sx={style.heading.heading2}>Skill Summary</Text>
          </Box>
          <Box
            sx={{
              fontSize: "20px",
              fontWeight: "400",
            }}
          >
            {DataPill()}
          </Box>
        </Box>
        <Box sx={style.box.boxContentRightContainer} id="work-experience">
          <Box
            sx={style.box.boxHeading}
            bg={useColorModeValue(
              "rgba(255, 255, 255, 0.07)",
              "rgba(0, 0, 0, 0.2)"
            )}
          >
            <Text sx={style.heading.heading2}>Work Experience</Text>
          </Box>
          <Box>{DataExp(textColor)}</Box>
        </Box>
        <Box sx={style.box.boxContentRightContainer} id="certifications">
          <Box
            sx={style.box.boxHeading}
            bg={useColorModeValue(
              "rgba(255, 255, 255, 0.07)",
              "rgba(0, 0, 0, 0.2)"
            )}
          >
            <Text sx={style.heading.heading2}>Certifications</Text>
          </Box>
          <Box>{DataCert(bgColor, textColor, bgButton)}</Box>
        </Box>
        <Box sx={style.box.boxContentRightContainer} id="portfolio-overview">
          <Box
            sx={style.box.boxHeading}
            bg={useColorModeValue(
              "rgba(255, 255, 255, 0.07)",
              "rgba(0, 0, 0, 0.2)"
            )}
          >
            <Text sx={style.heading.heading2}>Portfolio Preview</Text>
          </Box>
          <Box sx={style.box.boxText}>
            <Tabs isFitted variant="enclosed">
              <TabList mb="1em" sx={style.tabs.tabsList}>
                <Tab sx={style.tabs.tab}>One</Tab>
                <Tab sx={style.tabs.tab}>Two</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
        <Box sx={style.box.boxContentRightContainer} id="contact-details">
          <Box
            sx={style.box.boxHeading}
            bg={useColorModeValue(
              "rgba(255, 255, 255, 0.07)",
              "rgba(0, 0, 0, 0.2)"
            )}
          >
            <Text sx={style.heading.heading2}>Contact Details</Text>
          </Box>
          <Box>
            <Box sx={style.exp.container}>
              <Box sx={style.exp.expLeft}>
                <Text sx={style.text.simple}>Work Email</Text>
              </Box>
              <Box sx={style.exp.expRight}>
                <Text sx={style.text.simple}>greniel.galinato@gmail.com</Text>
              </Box>
              <Box>
                <Button
                  as={Link}
                  href={"mailto:greniel.galinato@gmail.com"}
                  color={textColor}
                  bg={bgButton}
                  _hover={{
                    bg: "#ffffff86",
                  }}
                  target="_blank"
                >
                  <LinkIcon />
                </Button>
              </Box>
            </Box>
            <Box sx={style.exp.container}>
              <Box sx={style.exp.expLeft}>
                <Text sx={style.text.simple}>LinkedIn</Text>
              </Box>
              <Box sx={style.exp.expRight}>
                <Text sx={style.text.simple}>in/grenielgalinato</Text>
              </Box>
              <Box>
                <Button
                  as={Link}
                  href={"https://www.linkedin.com/in/grenielgalinato"}
                  color={textColor}
                  bg={bgButton}
                  _hover={{
                    bg: "#ffffff86",
                  }}
                  target="_blank"
                >
                  <ExternalLinkIcon />
                </Button>
              </Box>
            </Box>
            <Box>
              <Text sx={style.text.simple}>
                You may chat me at my LinkedIn account
              </Text>
            </Box>
          </Box>
        </Box>
        <Box sx={style.box.boxContentRightContainer} id="footnote">
          <Box
            sx={style.box.boxHeading}
            bg={useColorModeValue(
              "rgba(255, 255, 255, 0.07)",
              "rgba(0, 0, 0, 0.2)"
            )}
          >
            <Text sx={style.heading.heading2}>Footnote</Text>
          </Box>
          <Box>
            <Box>
              <Text sx={style.text.simple}>
                Hi again! I'm sorry for some missing information
                <br />
                I'm still building my site with missing features
                <br />
                such as Projects, About Me, Certifications, small features and
                Mobile Version (sorry in advance)
                <br />
                You may check the links at the left side for other created
                projects I created. <br />
                <br />
                My Portfolio will be updated every now and then. Thank you~!
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
