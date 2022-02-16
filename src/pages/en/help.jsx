import React from 'react';
import { graphql } from 'gatsby';
import Main from '/src/templates/aide';

export default function Page({ ...props }) {
  return <Main fr='/aide' {...props} />;
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
    allAirtableTextesDuSite(filter: { data: { url: { eq: "/aide" } } }) {
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
  }
`;
