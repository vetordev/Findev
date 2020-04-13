import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { Container, Link } from './styles';

export default function GitHubLink({ iconSize, fontSize }) {
  return (
     <Container>
          <FaGithub size={iconSize} color="#000" />
          <Link size={fontSize}>
               <a href="https://github.com/stoneparker" target="_blank">
                    https://github.com/stoneparker
               </a>
          </Link>
     </Container>
  );
}
