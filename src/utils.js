import slugify from '@sindresorhus/slugify';
import fromMarkdown from 'mdast-util-from-markdown';
// import toHast from 'mdast-util-to-hast';
// import toHtml from 'hast-util-to-html';

import remarkTypograf from '@mavrin/remark-typograf';
import breaks from 'remark-breaks';
import ReactMarkdown from 'react-markdown';

import { normalize as normalize_ } from '../util';

export const normalize = normalize_;

const spy = (x) => {
  console.log(x);
  return x;
};

export const cleanBook = (node) => {
  const auteur =
    rectAuteur(node.data['Auteur_livre'] ?? node.data['Auteur']) ?? '';
  const linkAuteur = node.data['Auteur'] ?? node.data['Auteur_livre'] ?? '';
  const titre = node.data['Titre'] ?? '';
  return {
    auteur: auteur || '',
    id: node.id,
    auteur: rectAuteur(node.data['Auteur_livre'] ?? node.data['Auteur']),
    titre: titre || '',
    annee: node.data['Publication__date_']?.slice(0, 4),
    collection: node.data['Collection'],
    genre: node.data['Genre'],
    hauteur: node.data['Hauteur__cm_'],
    largeur: node.data['Largeur__cm_'],
    isbn: node.data['ISBN'],
    prixCAD: node.data['Prix_site_Web__CAD_'],
    prixEuro: node.data['Prix_site_Web__EU_'],
    pages: node.data['Pages__nombre_'],
    presentation: node.data['Pr_sentation_et_Bio']?.trim() || '',
    autourDuLivre: node.data['Autour_du_livre']?.trim() || '',
    createursSecondaires: node.data['Cr_ateurs_secondaires']?.trim() || '',
    epuise: !!node.data['_puis_'],
    couvertures: node.data['Couverture']?.map(({ url }) => url) || [],
    page: `/livres/${slugify(linkAuteur)}/${slugify(titre)}`,
    pageAuteur: `/auteurs/${slugify(linkAuteur)}`,
  };
};

export const rectAuteur = (name) => {
  if (!name) return null;
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

export const MD = ({ lang, contents }) => (
  <ReactMarkdown
    remarkPlugins={([remarkTypograf, { locale: [lang] }], [breaks])}
    children={contents}
  />
);
