import React from 'react';
import slugify from '@sindresorhus/slugify';
import Layout from '../components/layout';
import * as Icons from '../components/icons';
import { useTheme } from '@emotion/react';
import {
  H1Tilde,
  H3,
  Box,
  Flex,
  Card,
  Quote,
  Image,
  Arrows,
  Caption,
  VSpacerMedium,
  ButtonSmall,
} from '../components/elements';
import oiseauHome from '../images/Oiseau_Home.svg';
import stoneGoose from '../images/stonegoose1_BasseResolution-Remplacer.png';
import bookSample from '../images/book-sample.jpg';
import { Link, graphql } from 'gatsby';
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
          <Link key={auteur} to={`/auteurs/${slugify(auteur)}`}>
            <li>{rectAuteur(auteur)}</li>
          </Link>
        ))}
      </ul>
    </Box>
  );
};

export default function Home({ data }) {
  let auteurs = new Set();
  for (const node of data.allAirtable.nodes) {
    const auteur = node.data.Auteur;
    if (auteur) {
      auteurs.add(node.data.Auteur);
    }
  }
  auteurs = [...auteurs];
  auteurs.sort(cmp);
  return (
    <Layout>
      <VSpacerMedium />
      <H1Tilde>Nos Auteur.e.s</H1Tilde>
      <VSpacerMedium />
      <Authors auteurs={auteurs} />
      <VSpacerMedium />
    </Layout>
  );
}

export const query = graphql`
  query {
    allAirtable {
      nodes {
        data {
          Auteur
        }
      }
    }
  }
`;
