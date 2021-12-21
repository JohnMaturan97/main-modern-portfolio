import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          《 ⒷⓄⓇⓃ ⓉⓄ ⒸⓄⒹⒺ 》
        </SectionTitle>
        <SectionText>
          Data-driven and a creator who is passionate about building the future
          of innovation through Cloud Native Development.
        </SectionText>

        <Button onClick={props.handleClick}>
          <a
            id="myLink"
            href="https://drive.google.com/file/d/1YCt1F8kvgeEo3pQEn7Is2iaAeIaTRtdd/view?usp=sharing"
            target="_blank"
            onclick="MyFunction();"
          >
            Resume
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
