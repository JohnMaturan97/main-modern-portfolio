import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        《 ⒷⓄⓇⓃ ⓉⓄ ⒸⓄⒹⒺ 》
        </SectionTitle>
        <SectionText>
        Data-driven and a creator who is passionate about building the future of innovation through Computer Science.
        </SectionText>
        <Button onClick={props.handleClick}>Resume 
        <a href="/"></a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;