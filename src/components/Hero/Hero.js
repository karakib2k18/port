import React from "react";
import Link from 'next/link';

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
          <span class="myname">I'm Kazi Abdur Rakib </span><br />
          FULL STACK WEB DEVELOPER
        </SectionTitle>
        <SectionText>
          I’m a Full Stack Web Developer. I’m very passionate and dedicated to my
          work. I have acquired the skills and necessary knowledge including
          React, Node, Express, MongoDB, Firebase and Heroku.
        </SectionText>
        <Button >
        <Link href="https://drive.google.com/file/d/1L7FjGbtWRb0YnJtNtLjvFtEqlKuRaM-2/view?usp=sharing">
        Download Resume
        </Link>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
