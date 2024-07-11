import Scrollspy from "react-scrollspy";
import { List, ListItem, Link } from "@chakra-ui/react";
import { style } from "../styles";

const SideNav = () => {
  return (
    <List
      as={Scrollspy}
      className="scrollspy"
      items={[
        "overview",
        "skill-summary",
        "work-experience",
        "certifications",
        "portfolio-overview",
        "contact-details",
        "footnote",
      ]}
      currentClassName="active"
    >
      <ListItem sx={style.list.listItem}>
        <Link href="#overview">Overview</Link>
      </ListItem>
      <ListItem sx={style.list.listItem}>
        <Link href="#skill-summary">Skill Summary</Link>
      </ListItem>
      <ListItem sx={style.list.listItem}>
        <Link href="#work-experience">Work Experience</Link>
      </ListItem>
      <ListItem sx={style.list.listItem}>
        <Link href="#certifications">Certifications</Link>
      </ListItem>
      <ListItem sx={style.list.listItem}>
        <Link href="#portfolio-overview">Portfolio Overview</Link>
      </ListItem>
      <ListItem sx={style.list.listItem}>
        <Link href="#contact-details">Contact Details</Link>
      </ListItem>
      <ListItem sx={style.list.listItem}>
        <Link href="#footnote">Footnote</Link>
      </ListItem>
    </List>
  );
};

export default SideNav;
