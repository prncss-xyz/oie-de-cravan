import React from 'react';
import Layout from '../components/layout';
import * as Icons from '../components/icons';
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
} from '../components/elements';
import oiseauHome from '../images/Oiseau_Home.svg';
import stoneGoose from '../images/stonegoose1_BasseResolution-Remplacer.png';
import bookSample from '../images/book-sample.jpg';
import theme from '../components/theme';
import { graphql } from 'gatsby';
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

const normalize = (a) => removeAccents(a).toLowerCase();

const cmp = (a, b) => {
  const an = normalize(a);
  const bn = normalize(b);
  if (an < bn) return -1;
  if (bn > an) return 1;
  return 0;
};

export default function Home({ data }) {
  let auteurs = new Set();
  for (const node of data.allAirtable.nodes) {
    const auteur = node.data.Auteur;
    if (auteur) {
      auteurs.add(rectAuteur(node.data.Auteur));
    }
  }
  auteurs = [...auteurs];

  auteurs.sort(cmp);
  return (
    <Layout>
      <H1Tilde>Nos Auteur.e.s</H1Tilde>
      <Box color='accent' textAlign='center'>
        <ul css={{ listStyle: 'none' }}>
          {auteurs.map((auteur) => (
            <li key={auteur}>{auteur}</li>
          ))}
        </ul>
      </Box>
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
