import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there 👋
        </SectionTitle>
        <SectionText>
          Hello everyone, This is Thau. I've been working as Frontend developer for about 8 years.
          I'm passionate about JavaScript, TypeScript and ReactJS. Update from main 2.
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://thaunguyen.com/files/resume.pdf';
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
