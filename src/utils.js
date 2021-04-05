export const cleanBook = (node) => {
  return {
    id: node.id,
    auteur: rectAuteur(node.data['Auteur_livre'] ?? node.data['Auteur']),
    titre: node.data['Titre'],
    annee: node.data['Publication__date_']?.slice(0, 4),
    collection: node.data['Collection'],
    genre: node.data['Genre'],
    hauteur: node.data['Hauteur__cm_'],
    largeur: node.data['Largeur__cm_'],
    isbn: node.data['ISBN'],
    prixCAD: node.data['Prix_site_Web__CAD_'],
    prixEuro: node.data['Prix_site_Web__EU_'],
    pages: node.data['Pages__nombre_'],
    presentation: node.data['Pr_sentation'],
    autourDuLivre: node.data['Autour_du_livre'],
    epuise: !!node.data['_puis_'],
    couvertures: node.data['Couverture']?.map(({ url }) => url) || [],
  };
};

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
