import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portofolio
      </SectionTitle>
      <SectionText>
        I am a fresh graduate student with an interest in front end development. I've also worked on several projects. Scroll down to see the details.
        </SectionText>
        <Button onClick={() => window.location = "https://google.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;