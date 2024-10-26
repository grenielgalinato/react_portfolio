import {
  Box,
  Text,
  Link,
  Button,
  useColorModeValue,
  Image,
  useColorMode,
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
            Web Developer and Designer
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
              Hello! Thank you for visiting my online portfolio.
            </Text>
            <Text sx={style.text.normal}>
              I’m Greniel Galinato, a passionate web developer, software
              engineer, web and graphic designer from Pasig City, Philippines.
              In my leisure time, I enjoy casually playing Valorant,
              binge-watching Korean movies on Netflix, and engaging in silent
              reading on Reddit.
            </Text>
            <Text sx={style.text.normal}>
              In terms of work, I can offer a broad range of expertise in web
              development and web design, bolstered by my three years of
              professional experience as a web developer.
            </Text>
            <Text sx={style.text.normal}>
              I'm also continuing to upskill in web development while also
              trying out app development. I believe that learning is a lifetime
              journey, and as I fail many times in life, I'm learning and
              getting wiser.
            </Text>
            <Text sx={style.text.normal}>
              I hope this overview gives you some insight into me. You can check
              out my information in this portfolio, and feel free to contact me.
              I look forward to having a conversation and hope to work with you.
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
                All Rights Reserved 2024 @ grenielgalinato.com
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
