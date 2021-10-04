import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillGitlab, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems:'center', color: 'white', marginBottom:'20px'}}>
          <DiCssdeck size="3rem" /><Span>Nadhirsyah</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
      <Link href="#technologies">
        <NavLink>Technologies</NavLink>
      </Link>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/nadhirsyah">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/nadhirsyah-indra/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://gitlab.com/nadhirsyah">
        <AiFillGitlab size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
