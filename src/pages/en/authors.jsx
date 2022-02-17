import React from 'react';
import { graphql } from 'gatsby';
import Main from '/src/templates/auteurs';

export default function Page({ ...props }) {
  return <Main fr='/auteurs' {...props} />;
}
export const query = graphql`
  query {
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
    allAirtableTextesDuSite(filter: { data: { url: { eq: "/auteurs" } } }) {
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
    ) {
      nodes {
        data {
          Auteur
        }
      }
    }
  }
`;
