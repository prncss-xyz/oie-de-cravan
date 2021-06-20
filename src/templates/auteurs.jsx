import React from 'react';
import page from '../components/layout';
import { useTheme } from '@emotion/react';
import {
  H1Tilde,
  Box,
  VSpacerMedium,
} from '../components/elements';
import { Link } from 'gatsby';
import removeAccents from 'remove-accents';

const rectAuteur = (name) => {
  let m;
  m = name.match(/(.*),(.*)\((.*)\)/);
  if (m) {
    const [_, a, b, c] = m;
    return `${b.trim()} ${a.trim()} (${c.trim()})`;
  }
  m = name.match(/(.*),(.*)/);
  if (m) {
    const [_, a, b] = m;
    return `${b.trim()} ${a.trim()}`;
  }
  return name.trim();
};

const normalize = (a) => removeAccents(rectAuteur(a)).toLowerCase();

const cmp = (a, b) => {
  const an = normalize(a);
  const bn = normalize(b);
  if (an < bn) return -1;
  if (bn < an) return 1;
  return 0;
};

const Authors = ({ auteurs }) => {
  const theme = useTheme();
  return (
    <Box color='accent' textAlign='center' {...theme.styles.authors}>
      <ul css={{ listStyle: 'none' }}>
        {auteurs.map((auteur) => (
          <Link key={auteur} to={`/catalogue?q=${rectAuteur(auteur)}`}>
            <li>{rectAuteur(auteur)}</li>
          </Link>
        ))}
      </ul>
    </Box>
  );
};

function Main({ data }) {
  let auteurs = new Set();
  for (const node of data.allAirtableCatalogue.nodes) {
    const auteur = node.data.Auteur;
    if (auteur) {
      auteurs.add(node.data.Auteur);
    }
  }
  auteurs = [...auteurs];
  auteurs.sort(cmp);
  return (
    <>
      <VSpacerMedium />
      <H1Tilde>Nos Auteur.e.s</H1Tilde>
      <VSpacerMedium />
      <Authors auteurs={auteurs} />
      <VSpacerMedium />
    </>
  );
}

export default page(Main)
