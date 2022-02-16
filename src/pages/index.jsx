import React from 'react';
import { graphql } from 'gatsby';
import Main from '/src/templates/home';
export default function Page({ ...props }) {
  return <Main en='/en' {...props} />;
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
          fr {
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
          fr {
            childMarkdownRemark {
              html
            }
          }
          Name
        }
      }
    }
    allAirtableCatalogue(
      filter: { data: { Presentation_et_bio_fr: { raw: { glob: "*" } } } }
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
          Auteur
        }
      }
    }
  }
`;
