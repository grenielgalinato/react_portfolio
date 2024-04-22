import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Box,
  Text,
  Link,
  useColorModeValue,
  Image,
  useColorMode,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from '@chakra-ui/react';
import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons';
import { skillSummary, workExperience, Links, certsData } from '../data';
import { style } from '../styles';

interface Props {
  path: string;
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { children, path } = props;

  return (
    <Link
      as={ReactRouterLink}
      px={2}
      py={2}
      color={useColorModeValue('#ffffffb3', '#191919')}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.700', 'gray.200'),
      }}
      to={path}
      target='_blank'
    >
      {children}
    </Link>
  );
};

const DataPill = () => {
  const colorByNumber = (id: number): string => {
    switch (id) {
      case 1:
        return '#72A0C1';
      case 2:
        return '#6295BA';
      case 3:
        return '#538BB3';
      case 4:
        return '#4980A7';
      default:
        return '#cccccc';
    }
  };

  return (
    <Box sx={style.pill.container}>
      {skillSummary.map((data) => (
        <Box
          key={data.id}
          sx={style.pill.box}
        >
          <Text sx={style.pill.title}>
            <Box
              sx={style.pill.titleBox}
              bg={colorByNumber(data.id)}
            />
            {data.title}
          </Text>
          <Box sx={style.pill.textBox}>
            {data.skills.map((val) => (
              <Text
                key={val}
                sx={style.pill.text}
                bg={colorByNumber(data.id)}
              >
                {val}
              </Text>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const DataExp = (textColor: string) => {
  const workDataExp = [...workExperience].reverse();

  return workDataExp.map((exp) => (
    <Box
      key={exp.id}
      sx={style.exp.container}
    >
      <Box sx={style.exp.expLeft}>
        <Text sx={style.exp.expTenure}>{exp.tenure}</Text>
      </Box>
      <Box sx={style.exp.expRight}>
        <Box sx={style.exp.expBoxHeading}>
          <Text sx={style.exp.expHeading}>{exp.jobTitle}</Text>
          <Link
            href=''
            target='_blank'
            sx={style.exp.expSubHeading}
            color={textColor}
          >
            <ExternalLinkIcon sx={style.exp.expIcon} />
            {exp.company}
          </Link>
        </Box>
        {exp.description.split('\n').map((str) => (
          <Text marginBottom='8px'>{str}</Text>
        ))}
      </Box>
    </Box>
  ));
};

const CertDetails = (bgColor: string, textColor: string, bgButton: string) => {
  return certsData.map((cert) => (
    <Accordion allowToggle>
      <AccordionItem sx={style.accordion.accordionBox}>
        <h2>
          <AccordionButton
            padding='20px'
            _hover={{
              bg: bgColor,
            }}
          >
            <Box
              as='span'
              sx={style.accordion.accordionContentBox}
            >
              <Box sx={style.accordion.accordionContentInnerBox}>
                <Button
                  as={Link}
                  href={cert.imageUrl}
                  color={textColor}
                  bg={bgButton}
                  _hover={{
                    bg: '#ffffff86',
                  }}
                  target='_blank'
                >
                  <LinkIcon />
                </Button>
              </Box>
              <Box>
                <Text sx={style.accordion.heading}>{cert.title}</Text>
                <Text sx={style.accordion.subHeading}>{cert.org}</Text>
              </Box>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel p={4}>
          <Image
            src={cert.imageUrl}
            alt=''
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ));
};

const HomePage: React.FC = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue('#ffffffb3', '#191919');
  const bgButton = useColorModeValue('transparent', '#ffffffb3');
  const bgColor = useColorModeValue(
    'rgba(255, 255, 255, 0.07)',
    'rgba(0, 0, 0, 0.2)'
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={style.box.boxContentLeft}>
        <Box sx={style.box.boxContentLeftHead}>
          <Text sx={style.heading.heading1}>Greniel Galinato</Text>
          <Text
            sx={style.heading.subHeading1}
            color={textColor}
          >
            Web Developer @ Sence1 Inc.
          </Text>
        </Box>
        <Box sx={style.box.boxContentLeftBottom}>
          {Links.map((link) => (
            <NavLink
              key={link.text}
              path={link.path}
            >
              <Image
                sx={style.box.boxAvatar}
                src={colorMode === 'light' ? link.imageLight : link.imageDark}
              />
            </NavLink>
          ))}
        </Box>
      </Box>
      <Box sx={style.box.boxContentRight}>
        <Box sx={style.box.boxContentRightContainer}>
          <Box
            sx={style.box.boxHeading}
            bg={useColorModeValue(
              'rgba(255, 255, 255, 0.07)',
              'rgba(0, 0, 0, 0.2)'
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
        <Box sx={style.box.boxContentRightContainer}>
          <Box
            sx={style.box.boxHeading}
            bg={useColorModeValue(
              'rgba(255, 255, 255, 0.07)',
              'rgba(0, 0, 0, 0.2)'
            )}
          >
            <Text sx={style.heading.heading2}>Skill Summary</Text>
          </Box>
          <Text
            sx={{
              fontSize: '20px',
              fontWeight: '400',
            }}
          >
            {DataPill()}
          </Text>
        </Box>
        <Box sx={style.box.boxContentRightContainer}>
          <Box
            sx={style.box.boxHeading}
            bg={useColorModeValue(
              'rgba(255, 255, 255, 0.07)',
              'rgba(0, 0, 0, 0.2)'
            )}
          >
            <Text sx={style.heading.heading2}>Work Experience</Text>
          </Box>
          <Box>{DataExp(textColor)}</Box>
        </Box>
        <Box sx={style.box.boxContentRightContainer}>
          <Box
            sx={style.box.boxHeading}
            bg={useColorModeValue(
              'rgba(255, 255, 255, 0.07)',
              'rgba(0, 0, 0, 0.2)'
            )}
          >
            <Text sx={style.heading.heading2}>Certifications</Text>
          </Box>
          <Box>{CertDetails(bgColor, textColor, bgButton)}</Box>
        </Box>
        <Box sx={style.box.boxContentRightContainer}>
          <Box
            sx={style.box.boxHeading}
            bg={useColorModeValue(
              'rgba(255, 255, 255, 0.07)',
              'rgba(0, 0, 0, 0.2)'
            )}
          >
            <Text sx={style.heading.heading2}>Projects Preview</Text>
          </Box>
          <Box sx={style.box.boxText}>
            <Text sx={style.text.normal}>WIP</Text>
          </Box>
        </Box>
        <Box sx={style.box.boxContentRightContainer}>
          <Box
            sx={style.box.boxHeading}
            bg={useColorModeValue(
              'rgba(255, 255, 255, 0.07)',
              'rgba(0, 0, 0, 0.2)'
            )}
          >
            <Text sx={style.heading.heading2}>Contact Details</Text>
          </Box>
          <Box>
            <Box sx={style.exp.container}>
              <Box sx={style.exp.expLeft}>
                <Text sx={style.text.simple}>Email</Text>
              </Box>
              <Box sx={style.exp.expRight}>
                <Text sx={style.text.simple}>greniel.galinato@gmail.com</Text>
              </Box>
            </Box>
            <Box>
              <Text sx={style.text.simple}>
                You may chat me at my LinkedIn account
              </Text>
            </Box>
          </Box>
        </Box>
        <Box sx={style.box.boxContentRightContainer}>
          <Box
            sx={style.box.boxHeading}
            bg={useColorModeValue(
              'rgba(255, 255, 255, 0.07)',
              'rgba(0, 0, 0, 0.2)'
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
