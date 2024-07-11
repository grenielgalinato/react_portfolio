import { Box, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { workExperience } from "../data";
import { style } from "../styles";

const DataExp = (textColor: string) => {
  const workDataExp = [...workExperience].reverse();

  return workDataExp.map((exp) => (
    <Box key={exp.id} sx={style.exp.container}>
      <Box sx={style.exp.expLeft}>
        <Text sx={style.exp.expTenure}>{exp.tenure}</Text>
      </Box>
      <Box sx={style.exp.expRight}>
        <Box sx={style.exp.expBoxHeading}>
          <Text sx={style.exp.expHeading}>{exp.jobTitle}</Text>
          <Link
            href=""
            target="_blank"
            sx={style.exp.expSubHeading}
            color={textColor}
          >
            <ExternalLinkIcon sx={style.exp.expIcon} />
            {exp.company}
          </Link>
        </Box>
        {exp.description.split("\n").map((str) => (
          <Text marginBottom="8px" key={str}>
            {str}
          </Text>
        ))}
      </Box>
    </Box>
  ));
};

export default DataExp;
