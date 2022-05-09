import React from 'react';
import { graphql } from 'gatsby';
import Main from '/src/templates/index';

export default function Page({ ...props }) {
  return <Main fr='/' {...props} />;
}

export const queryStr = graphql`
  query {
    site {
      buildTime
    }
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
    allAirtableTextesDuSite(filter: { data: { url: { eq: "/" } } }) {
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
    allAirtableCatalogue(
      filter: { data: { Presentation_et_bio_en: { raw: { glob: "*" } } } }
      sort: { fields: data___Publication__date_, order: DESC }
    ) {
      nodes {
        id
        data {
          Auteur_livre
          Couverture {
            url
          }
          Publication__date_
          Titre
          titre_url
          Auteur
        }
      }
    }
  }
`;
