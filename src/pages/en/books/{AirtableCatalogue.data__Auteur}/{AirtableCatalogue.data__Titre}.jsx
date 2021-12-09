import React from 'react';
import { graphql } from 'gatsby';
import Main from '/src/templates/livre';

export default function Page({ ...props }) {
  return <Main fr='/' {...props} />;
}

export const query = graphql`
  query ($id: String) {
    layout: allAirtableTextesDuSite(
      filter: { data: { url: { eq: "layout" } } }
    ) {
      nodes {
        data {
          en {
            childMarkdownRemark {
              html
            }
          }
          Name
        }
      }
    }
    allAirtableTextesDuSite(filter: { data: { url: { eq: "/livres" } } }) {
      nodes {
        data {
          en {
            childMarkdownRemark {
              html
            }
          }
          Name
        }
      }
    }
    airtableCatalogue(id: { eq: $id }) {
      data {
        Auteur
        Auteur_livre
        Collection
        Couverture {
          url
        }
        Genre
        Hauteur__cm_
        Largeur__cm_
        ISBN
        Pages__nombre_
        Prix_site_Web__CAD_
        Prix_site_Web__EU_
        Publication__date_
        Titre
        Pr_sentation_et_Bio__fr_
        Cr_ateurs_secondaires__fr_
        _puis_
      }
      recordId
    }
    allAirtableAutourDuLivre(
      filter: {
        data: {
          Catalogue: { elemMatch: { id: { eq: $id } } }
          Langue: { eq: "en" }
        }
      }
    ) {
      nodes {
        data {
          Texte__contenu
          Texte__description
          Texte__description_extra
        }
      }
    }
  }
`;
