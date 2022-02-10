import React from 'react';
import { graphql } from 'gatsby';
import Main from '/src/templates/auteurs';

export default function Page({ ...props }) {
  return <Main en='/en/authors' {...props} />;
}
export const query = graphql`
  query {
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
    allAirtableTextesDuSite(filter: { data: { url: { eq: "/auteurs" } } }) {
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
    allAirtableCatalogue {
      nodes {
        data {
          Auteur
        }
      }
    }
  }
`;
