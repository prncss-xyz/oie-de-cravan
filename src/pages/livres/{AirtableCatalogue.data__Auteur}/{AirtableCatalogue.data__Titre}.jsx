import React from 'react';
import { graphql } from 'gatsby';
import Main from '/src/templates/livre';

export default function Page({ ...props }) {
  return <Main en='/en' {...props} />;
}

export const query = graphql`
  query ($id: String) {
    layout: allAirtableTextesDuSite(
      filter: { data: { url: { eq: "layout" } } }
    ) {
      nodes {
        data {
          fr {
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
          fr {
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
        Prix_site_web__CAD_
        Prix_site_web__EUR_
        Publication__date_
        Titre
        Pr_sentation_et_bio__fr_
        Cr_ateurs_secondaires__fr_
        _puis_
      }
      recordId
    }
    allAirtableAutourDuLivre(
      filter: {
        data: {
          Catalogue: { elemMatch: { id: { eq: $id } } }
          Langue: { eq: "fr" }
        }
      }
    ) {
      nodes {
        data {
        Texte__contenu
        Texte__description
        Texte__description_extra
        Texte__signature
        Youtube__URL
        }
      }
    }
  }
`;
