import React from "react";
import {
  DiFirebase,
  DiReact,
  DiDigitalOcean,
  DiCss3Full,
  DiSass,
  DiJsBadge,
  DiHtml5,
  DiJava,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiPostgresql,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
// import {Tooltip } from "antd";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range of Java and JavaScript-based technologies that consisted of front-end technologies, development languages, databases, cache, client designs, servers, test-driven development, behavior-driven development, and version control systems.
    </SectionText>
    <List>
      <ListItem>
        <picture></picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>

          <DiHtml5 size="4rem"/><DiCss3Full size="4rem" /> <DiSass size="4rem"/>  <DiJsBadge size="4rem" />  <DiReact size="4rem" />    

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
    
          <DiJava size="4rem"/>  <DiNodejs size="4rem"/>  <DiMongodb size="4rem"/>  <DiMysql size="4rem"/>  <DiPostgresql size="4rem"/>

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        </picture>
        <ListContainer>
          <ListTitle>Cloud Computing</ListTitle>
          <ListParagraph>
            ** Coming Soon ** <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
