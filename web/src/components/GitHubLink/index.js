import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { Container, LinkI } from './styles';

export default function GitHubLink({ iconSize, fontSize }) {
  return (
     <Container>
          <FaGithub size={iconSize} color="#000" />
          <LinkI size={fontSize}>https://github.com/stoneparker</LinkI>
     </Container>
  );
}
