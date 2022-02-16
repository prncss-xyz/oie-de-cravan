import slugify from '@sindresorhus/slugify';
import { normalize as normalize_ } from '../util';
import { typo_ajust as typo_ajust_ } from '../util';

export const normalize = normalize_;

export const typo_ajust = typo_ajust_;

export const cleanBook = (lang, node) => {
  const linkAuteur = node.data['Auteur'] ?? node.data['Auteur_livre'] ?? '';
  const titre = node.data['Titre'] ?? '';
  return {
    id: node.id,
    auteur: rectAuteur(node.data['Auteur']) ?? '',
    auteurLivre:
      rectAuteur(node.data['Auteur_livre'] ?? node.data['Auteur']) ?? '',
    titre: titre ?? '',
    date: new Date(node.data['Publication__date_']),
    annee: node.data['Publication__date_']?.slice(0, 4),
    collection: node.data['Collection'],
    genre: node.data['Genre'],
    hauteur: node.data['Hauteur__cm_'],
    largeur: node.data['Largeur__cm_'],
    isbn: node.data['ISBN'],
    prixCAD: node.data['Prix_site_web__CAD_'],
    prixEuro: node.data['Prix_site_web__EUR_'],
    pages: node.data['Pages__nombre_'],
    presentation:
      node.data[`Pr_sentation_et_bio__fr_`]?.trim() ??
      node.data[`Pr_sentation_et_bio__en_`]?.trim() ??
      '',
    createursSecondaires:
      node.data[`Cr_ateurs_secondaires__fr_`]?.trim() ??
      node.data[`Cr_ateurs_secondaires__en_`]?.trim() ??
      '',
    epuise: !!node.data['_puis_'],
    couvertures: node.data['Couverture']?.map(({ url }) => url) ?? [],
    page: `${lang === 'fr' ? '/livres/' : '/en/books/'}${slugify(
      linkAuteur,
    )}/${slugify(titre)}`,
  };
};

const unPre = /^<p>(.*)<\/p>$/;
export const unP = (html) => html.match(unPre)?.[1];

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
