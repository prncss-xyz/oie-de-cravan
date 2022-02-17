import React from 'react';
import { graphql } from 'gatsby';
import Main from '/src/templates/livre';

export default function Page(props) {
  let en = '/en/catalogue';
  if (
    props.data.airtableCatalogue.data.Presentation_et_bio_en
  ) {
    const subPath = props.location.pathname.match(/^\/livres(.+)/)[1];
    en = '/en/books' + subPath;
    // should break the build if not matching
  }
  return <Main en={en} {...props} />;
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
        Presentation_et_bio_fr {
          childMarkdownRemark {
            html
          }
        }
        Presentation_et_bio_en {
          childMarkdownRemark {
            html
          }
        }
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
          Texte_contenu {
            childMarkdownRemark {
              html
            }
          }
          Texte__description
          Texte__signature
          Youtube__URL
        }
      }
    }
  }
`;
