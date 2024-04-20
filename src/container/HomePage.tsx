import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Text, Link, useColorModeValue, Image } from '@chakra-ui/react';
import IconGithub from '../assets/github.svg';
import IconBehance from '../assets/square-behance.svg';
import IconLInkedIn from '../assets/linkedin.svg';
import IcoCodePen from '../assets/codepen.svg';
import IconThreads from '../assets/threads.svg';

interface Props {
  path: string;
  children: React.ReactNode;
}

const Links = [
  {
    path: '/',
    text: 'github',
    image: (
      <Image
        sx={{ width: '40px', height: '40px' }}
        src={IconGithub}
        alt='github'
      />
    ),
  },
  {
    path: '/',
    text: 'linkedin',
    image: (
      <Image
        sx={{ width: '40px', height: '40px' }}
        src={IconLInkedIn}
        alt='linkedin'
      />
    ),
  },
  {
    path: '/',
    text: 'codepen',
    image: (
      <Image
        sx={{ width: '40px', height: '40px' }}
        src={IcoCodePen}
        alt='linkedin'
      />
    ),
  },
  {
    path: '/',
    text: 'behance',
    image: (
      <Image
        sx={{ width: '40px', height: '40px' }}
        src={IconBehance}
        alt='behance'
      />
    ),
  },
  {
    path: '/',
    text: 'threads',
    image: (
      <Image
        sx={{ width: '40px', height: '40px' }}
        src={IconThreads}
        alt='threads'
      />
    ),
  },
];

const NavLink = (props: Props) => {
  const { children, path } = props;

  return (
    <Link
      as={ReactRouterLink}
      px={2}
      py={2}
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

const HomePage: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          position: 'sticky',
          width: '600px',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          height: '70vh',
          overflowY: 'auto',
          top: '100px',
        }}
      >
        <Box sx={{}}>
          <Text sx={{ fontSize: '64px', fontWeight: '700' }}>
            Greniel Galinato
          </Text>
          <Text
            sx={{
              fontSize: '36px',
              fontWeight: '500',
              color: '#ffffffb3',
              fontFamily: 'Pridi, serif',
            }}
          >
            Web Developer @ Sence1 Inc.
          </Text>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
            width: '100%',
            alignSelf: 'flex-end',
          }}
        >
          {Links.map((link) => (
            <NavLink
              key={link.text}
              path={link.path}
            >
              {link.image}
            </NavLink>
          ))}
        </Box>
      </Box>
      <Box sx={{ position: 'relative', width: '600px', flexGrow: 1 }}>
        <Box
          sx={{
            marginBottom: '20px',
          }}
        >
          <Text
            sx={{
              fontSize: '24px',
              fontWeight: '500',
              fontFamily: 'Pridi, serif',
              marginBottom: '20px',
            }}
          >
            Summary
          </Text>
          <Text
            sx={{
              fontSize: '20px',
              fontWeight: '400',
            }}
          >
            I'm currently working as a Web Developer at CREATIVEHOPE PH INC.
            This role has allowed me to expand my knowledge and experience in
            various technologies, including JavaScript, Typescript, React,
            NextJS, Ruby on Rails, Hubspot, Wordpress, PHP, and MySQL.{' '}
          </Text>
        </Box>
        <Box>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
            amet lectus non eros elementum iaculis. Donec dictum nibh id
            scelerisque dapibus. Praesent sagittis est vel nisi vestibulum, sit
            amet finibus quam elementum. Ut ornare leo ante, eu varius tellus
            porttitor vitae. Suspendisse potenti. Ut sit amet rutrum purus, a
            lobortis metus. Mauris quis augue placerat, lobortis augue volutpat,
            egestas nulla. Integer quis ligula tristique, elementum tellus quis,
            tincidunt tortor. Donec mattis metus at eleifend efficitur. Ut
            tempor finibus erat, eu rutrum lectus semper vel. Sed vel quam
            cursus, pellentesque eros eget, consequat ligula. Praesent ut eros
            imperdiet, commodo tortor quis, euismod tortor. Vivamus mattis augue
            ac sapien fringilla accumsan. Donec euismod mattis volutpat. Aenean
            quis est ex. Morbi sodales neque ornare mollis tempor.
          </p>
          <p>
            Nunc lobortis nec dui sit amet varius. Phasellus auctor ex elit, non
            viverra arcu luctus sed. Vivamus sed magna a felis tincidunt
            faucibus. Donec luctus et lorem vel egestas. Morbi mattis ipsum sed
            rhoncus commodo. Sed quis consectetur urna. Vestibulum suscipit
            interdum turpis, vel suscipit orci. Morbi felis urna, mollis quis
            varius a, interdum sit amet augue.
          </p>
          <p>
            Praesent orci magna, mollis a luctus vitae, commodo malesuada
            turpis. Nullam ex quam, posuere a ornare vitae, vulputate et ante.
            Integer vel urna ut turpis ornare sodales a non libero. Suspendisse
            potenti. Mauris ac libero tincidunt, rhoncus lorem id, interdum
            odio. Fusce pharetra lacus placerat fermentum ultrices. Cras
            consectetur viverra felis in ornare. In interdum justo sed leo
            fringilla commodo. Donec semper, erat eget sagittis maximus, lorem
            tellus porta turpis, eu fermentum neque odio sed sapien.
          </p>
          <h2 id='getting-started'>Getting started</h2>
          <p>
            Maecenas ultricies turpis quis mauris pretium, id lacinia libero
            congue. Nam aliquet eget sem at dictum. Integer massa felis,
            faucibus sed lorem quis, tincidunt pulvinar neque. Sed fringilla,
            diam in porta convallis, elit enim rhoncus orci, fermentum
            condimentum lectus neque vel nisl. Nunc ac dui vitae urna tincidunt
            mattis in id est. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aliquam erat volutpat. Sed at libero varius, ultricies tortor
            in, scelerisque leo. Mauris ac odio augue. Morbi scelerisque leo
            nulla, eget porta neque ornare in. Fusce dictum posuere risus, eget
            lobortis diam mollis eget. Suspendisse aliquam facilisis gravida.
            Integer pretium laoreet lectus ut gravida. Mauris a augue risus.
            Aliquam eu euismod nulla, ut pulvinar magna.
          </p>
          <p>
            Nunc lobortis nec dui sit amet varius. Phasellus auctor ex elit, non
            viverra arcu luctus sed. Vivamus sed magna a felis tincidunt
            faucibus. Donec luctus et lorem vel egestas. Morbi mattis ipsum sed
            rhoncus commodo. Sed quis consectetur urna. Vestibulum suscipit
            interdum turpis, vel suscipit orci. Morbi felis urna, mollis quis
            varius a, interdum sit amet augue.
          </p>
          <p>
            Praesent orci magna, mollis a luctus vitae, commodo malesuada
            turpis. Nullam ex quam, posuere a ornare vitae, vulputate et ante.
            Integer vel urna ut turpis ornare sodales a non libero. Suspendisse
            potenti. Mauris ac libero tincidunt, rhoncus lorem id, interdum
            odio. Fusce pharetra lacus placerat fermentum ultrices. Cras
            consectetur viverra felis in ornare. In interdum justo sed leo
            fringilla commodo. Donec semper, erat eget sagittis maximus, lorem
            tellus porta turpis, eu fermentum neque odio sed sapien.
          </p>
          <div id='pricing'>
            <h2>Pricing</h2>
          </div>
          <p>
            Ut a leo massa. Fusce a mauris molestie, tempus arcu at, mollis
            sapien. Donec commodo pellentesque ante, eget viverra risus lobortis
            ac. Pellentesque tincidunt dui non ullamcorper finibus. Duis id
            nulla a dolor lacinia dictum. Cras consectetur mauris sit amet risus
            pulvinar dictum. Donec sagittis vitae dolor at luctus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
            amet lectus non eros elementum iaculis. Donec dictum nibh id
            scelerisque dapibus. Praesent sagittis est vel nisi vestibulum, sit
            amet finibus quam elementum. Ut ornare leo ante, eu varius tellus
            porttitor vitae. Suspendisse potenti. Ut sit amet rutrum purus, a
            lobortis metus. Mauris quis augue placerat, lobortis augue volutpat,
            egestas nulla. Integer quis ligula tristique, elementum tellus quis,
            tincidunt tortor. Donec mattis metus at eleifend efficitur. Ut
            tempor finibus erat, eu rutrum lectus semper vel. Sed vel quam
            cursus, pellentesque eros eget, consequat ligula. Praesent ut eros
            imperdiet, commodo tortor quis, euismod tortor. Vivamus mattis augue
            ac sapien fringilla accumsan. Donec euismod mattis volutpat. Aenean
            quis est ex. Morbi sodales neque ornare mollis tempor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
            amet lectus non eros elementum iaculis. Donec dictum nibh id
            scelerisque dapibus. Praesent sagittis est vel nisi vestibulum, sit
            amet finibus quam elementum. Ut ornare leo ante, eu varius tellus
            porttitor vitae. Suspendisse potenti. Ut sit amet rutrum purus, a
            lobortis metus. Mauris quis augue placerat, lobortis augue volutpat,
            egestas nulla. Integer quis ligula tristique, elementum tellus quis,
            tincidunt tortor. Donec mattis metus at eleifend efficitur. Ut
            tempor finibus erat, eu rutrum lectus semper vel. Sed vel quam
            cursus, pellentesque eros eget, consequat ligula. Praesent ut eros
            imperdiet, commodo tortor quis, euismod tortor. Vivamus mattis augue
            ac sapien fringilla accumsan. Donec euismod mattis volutpat. Aenean
            quis est ex. Morbi sodales neque ornare mollis tempor.
          </p>
          <p>
            Nunc lobortis nec dui sit amet varius. Phasellus auctor ex elit, non
            viverra arcu luctus sed. Vivamus sed magna a felis tincidunt
            faucibus. Donec luctus et lorem vel egestas. Morbi mattis ipsum sed
            rhoncus commodo. Sed quis consectetur urna. Vestibulum suscipit
            interdum turpis, vel suscipit orci. Morbi felis urna, mollis quis
            varius a, interdum sit amet augue.
          </p>
          <p>
            Praesent orci magna, mollis a luctus vitae, commodo malesuada
            turpis. Nullam ex quam, posuere a ornare vitae, vulputate et ante.
            Integer vel urna ut turpis ornare sodales a non libero. Suspendisse
            potenti. Mauris ac libero tincidunt, rhoncus lorem id, interdum
            odio. Fusce pharetra lacus placerat fermentum ultrices. Cras
            consectetur viverra felis in ornare. In interdum justo sed leo
            fringilla commodo. Donec semper, erat eget sagittis maximus, lorem
            tellus porta turpis, eu fermentum neque odio sed sapien.
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
