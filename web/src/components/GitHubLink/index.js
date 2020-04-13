import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { Container, Link } from './styles';

export default function GitHubLink({ iconSize, fontSize, link }) {
  return (
     <Container>
          <FaGithub size={iconSize} color="#000" />
          <Link size={fontSize}>
               <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
          </Link>
     </Container>
  );
}
