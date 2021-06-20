import React from 'react';
import { graphql } from 'gatsby';
import Main from '/src/templates/auteurs';

export default function Page({ ...props }) {
  return <Main fr='/auteurs' {...props} />;
}
export const query = graphql`
  query {
    layout: allAirtableTexteDuSite(
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
    allAirtableTexteDuSite(filter: { data: { url: { eq: "/auteurs" } } }) {
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
    allAirtableCatalogue {
      nodes {
        data {
          Auteur
        }
      }
    }
  }
`;
