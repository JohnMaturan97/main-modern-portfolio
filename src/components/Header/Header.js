import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiApple } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiApple size="3rem" /> <span>John Maturan</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/JohnMaturan97" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/john-maturan/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/eggrollz_pho_lyfe/" target="_blank">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
