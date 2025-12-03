import {
  Box,
  Text,
  Link,
  Button,
  useColorModeValue,
  Image,
  useColorMode,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Links } from "../data";
import {
  EmailIcon,
  ExternalLinkIcon,
  DownloadIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import SideNav from "../components/SideNav";
import NavLink from "../components/NavLink";
import DataPill from "../components/DataPill";
import DataExp from "../components/DataExp";
import DataCert from "../components/DataCert";
import DataPortfolio from "../components/DataPortfolio";
import { style } from "../styles";
import resume from "../assets/grenielgalinato-resume.pdf";

const HomePage: React.FC = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("#ffffffb3", "#191919");
  const bgButton = useColorModeValue("transparent", "#ffffffb3");
  const bgColor = useColorModeValue(
    "rgba(255, 255, 255, 0.07)",
    "rgba(0, 0, 0, 0.2)"
  );

  return (
    <Box sx={style.box.boxMain}>
      <Box sx={style.box.boxContentLeft}>
        <Box sx={style.box.boxContentLeftHead}>
          <Text sx={style.heading.subHeading2}>Hello! I'm</Text>
          <Text sx={style.heading.heading1}>Greniel Galinato</Text>
          <Text sx={style.heading.subHeading1} color={textColor}>
            Software Engineer and Web Developer
          </Text>
        </Box>
        <Box sx={style.box.boxSideNav}>
          <SideNav />
        </Box>
        <Box sx={style.box.boxIcons}>
          <Text sx={style.text.small}>access my other works here:</Text>
          <Box sx={style.box.boxContentLeftBottom}>
            {Links.map((link) => (
              <NavLink key={link.text} path={link.path}>
                <Image
                  sx={style.box.boxAvatar}
                  src={colorMode === "light" ? link.imageLight : link.imageDark}
                  alt={link.text}
                />
              </NavLink>
            ))}
          </Box>
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
              Hello and thank you for visiting my portfolio!
            </Text>
            <Text sx={style.text.normal}>
              I'm Greniel Galinato, a Full Stack Developer and Software Engineer
              based in Pasig City, Philippines. With over six years of
              professional experience, I specialize in creating responsive,
              user-centered web applications from concept to deployment.
            </Text>
            <Text sx={style.text.normal}>
              My technical toolkit includes:
              <br />
              <List>
                <ListItem>
                  - Frontend: React, Angular, Vue.js, HTML5/CSS3,
                  JavaScript/TypeScript
                </ListItem>
                <ListItem>
                  - Backend: NestJS, Node.js, Ruby on Rails, .NET Core
                </ListItem>
                <ListItem>
                  - Database: PostgreSQL, MySQL, MongoDB, MSSQL
                </ListItem>
                <ListItem>- DevOps: Docker, Azure, AWS, CI/CD Pipelines</ListItem>
                <ListItem>- CMS: Wordpress, Strapi</ListItem>
                <ListItem>- Automation: Microsoft Power Platform (Power Apps & Power Automate)</ListItem>
                <ListItem>- UI/UX Design: Figma, Adobe Creative Suite</ListItem>
              </List>
              <br />
              I'm passionate about clean code architecture, optimizing
              performance, and creating intuitive user experiences that solve
              real-world problems.
            </Text>
            <Text sx={style.text.normal}>
              I'm currently expanding my knowledge in mobile app development and
              cloud architecture. I embrace challenges as learning
              opportunities, each setback is simply a stepping stone toward
              greater expertise.
            </Text>
            <Text sx={style.text.normal}>
              Feel free to explore my projects below or reach out to discuss how
              we might work together. I'm always open to new connections and
              exciting collaborations!
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
          <Box>
            <Link as={ReactRouterLink} to="/about" sx={style.link.linkText}>
              View More
              <ArrowRightIcon sx={style.link.linkIcon} />
            </Link>
          </Box>
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
          <Box>
            <Link as={ReactRouterLink} to="/about" sx={style.link.linkText}>
              View More
              <ArrowRightIcon sx={style.link.linkIcon} />
            </Link>
          </Box>
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
          <Box sx={style.box.boxTab}>
            <DataPortfolio />
          </Box>
          <Box>
            <Link as={ReactRouterLink} to="/portfolio" sx={style.link.linkText}>
              View More
              <ArrowRightIcon sx={style.link.linkIcon} />
            </Link>
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
            <Box sx={style.exp.container2}>
              <Box sx={style.exp.expLeft}>
                <Text sx={style.text.simpleBold}>Work Email</Text>
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
                  <EmailIcon />
                </Button>
              </Box>
            </Box>
            <Box sx={style.exp.container2}>
              <Box sx={style.exp.expLeft}>
                <Text sx={style.text.simpleBold}>LinkedIn</Text>
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
            <Box sx={style.exp.container2}>
              <Box sx={style.exp.expLeft}>
                <Text sx={style.text.simpleBold}>Résumé</Text>
              </Box>
              <Box sx={style.exp.expRight}>
                <Text sx={style.text.simple}>grenielgalinato-resume.pdf</Text>
              </Box>
              <Box>
                <Button
                  as={ReactRouterLink}
                  to={resume}
                  color={textColor}
                  bg={bgButton}
                  _hover={{
                    bg: "#ffffff86",
                  }}
                  target={"_blank"}
                  download
                >
                  <DownloadIcon />
                </Button>
              </Box>
            </Box>
            <Box>
              <Link as={ReactRouterLink} to="/about" sx={style.link.linkText}>
                Know More About Me
                <ArrowRightIcon sx={style.link.linkIcon} />
              </Link>
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
            <Box sx={style.footnote.details}>
              <Text sx={style.text.simple}>
                This Portfolio is created by Greniel Galinato
              </Text>
              <Text sx={style.text.simple}>Tech Stack: React, ChakraUI</Text>
            </Box>
            <Box sx={style.footnote.copyright}>
              <Text sx={style.footnote.textSmall}>
                All Rights Reserved 2025 @ grenielgalinato.com
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
