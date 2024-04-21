import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Box,
  Text,
  Link,
  useColorModeValue,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { skillSummary, workExperience, Links } from '../data';
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
    >
      {children}
    </Link>
  );
};

const DataPill = () => {
  const colorByNumber = (id: number): string => {
    switch (id) {
      case 1:
        return '#3CBF30';
      case 2:
        return '#3B38ED';
      case 3:
        return '#ED388F';
      case 4:
        return '#CC5F10';
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

const HomePage: React.FC = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue('#ffffffb3', '#191919');

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
            <Text sx={style.heading.heading2}>Summary</Text>
          </Box>
          <Box sx={style.box.boxText}>
            <Text sx={style.text.normal}>
              I'm currently working as a Web Developer at CREATIVEHOPE PH INC.
              This role has allowed me to expand my knowledge and experience in
              various technologies, including JavaScript, Typescript, React,
              NextJS, Ruby on Rails, Hubspot, Wordpress, PHP, and MySQL.
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
          <Box sx={style.box.boxText}>
            <Text sx={style.text.normal}>
              I'm currently working as a Web Developer at CREATIVEHOPE PH INC.
              This role has allowed me to expand my knowledge and experience in
              various technologies, including JavaScript, Typescript, React,
              NextJS, Ruby on Rails, Hubspot, Wordpress, PHP, and MySQL.
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
            <Text sx={style.heading.heading2}>Projects Preview</Text>
          </Box>
          <Box sx={style.box.boxText}>
            <Text sx={style.text.normal}>
              I'm currently working as a Web Developer at CREATIVEHOPE PH INC.
              This role has allowed me to expand my knowledge and experience in
              various technologies, including JavaScript, Typescript, React,
              NextJS, Ruby on Rails, Hubspot, Wordpress, PHP, and MySQL.
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
            <Text sx={style.heading.heading2}>Contact Details</Text>
          </Box>
          <Box sx={style.box.boxText}>
            <Text sx={style.text.normal}>
              I'm currently working as a Web Developer at CREATIVEHOPE PH INC.
              This role has allowed me to expand my knowledge and experience in
              various technologies, including JavaScript, Typescript, React,
              NextJS, Ruby on Rails, Hubspot, Wordpress, PHP, and MySQL.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
