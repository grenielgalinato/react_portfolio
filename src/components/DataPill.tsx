import { Box, Text } from "@chakra-ui/react";
import { style } from "../styles";
import { skillSummary } from "../data";

const DataPill = () => {
  const colorByNumber = (id: number): string => {
    switch (id) {
      case 1:
        return "#72A0C1";
      case 2:
        return "#6295BA";
      case 3:
        return "#538BB3";
      case 4:
        return "#4980A7";
      default:
        return "#cccccc";
    }
  };

  return (
    <Box sx={style.pill.container}>
      {skillSummary.map((data) => (
        <Box key={data.id} sx={style.pill.box}>
          <Text sx={style.pill.title}>
            <Box
              as="span"
              sx={style.pill.titleBox}
              bg={colorByNumber(data.id)}
            />
            {data.title}
          </Text>
          <Box sx={style.pill.textBox}>
            {data.skills.map((val) => (
              <Text key={val} sx={style.pill.text} bg={colorByNumber(data.id)}>
                {val}
              </Text>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default DataPill;
