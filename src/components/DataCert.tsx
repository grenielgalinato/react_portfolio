import {
  Box,
  Text,
  Link,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { certsData } from "../data";
import { style } from "../styles";

const DataCert = (bgColor: string, textColor: string, bgButton: string) => {
  return certsData.map((cert) => (
    <Accordion key={cert.id} allowToggle>
      <AccordionItem sx={style.accordion.accordionBox}>
        <h2>
          <AccordionButton
            padding="20px"
            _hover={{
              bg: bgColor,
            }}
          >
            <Box as="span" sx={style.accordion.accordionContentBox}>
              <Box sx={style.accordion.accordionContentInnerBox}>
                <Button
                  as={Link}
                  href={cert.imageUrl}
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
              <Box>
                <Text sx={style.accordion.heading}>{cert.title}</Text>
                <Text sx={style.accordion.subHeading}>{cert.org}</Text>
              </Box>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel p={4}>
          <Image src={cert.imageUrl} alt="" />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ));
};

export default DataCert;
