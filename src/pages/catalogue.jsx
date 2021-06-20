import React from 'react';
import { graphql } from 'gatsby';
import Catalogue from '/src/templates/catalogue'

export default function Page({ ...props }) {
  return <Catalogue en='/en/catalogue' {...props} />
}

export const query = graphql`
  query CatalogueQuery {
    layout: allAirtableTexteDuSite(
      filter: { data: { url: { eq: "layout" } } }
    ) {
      nodes {
        data {
          fr {
            childMarkdownRemark {
              html
            }
          }
          en {
            childMarkdownRemark {
              html
            }
          }
          Name
        }
      }
    }
    allAirtableTexteDuSite(filter: { data: { url: { eq: "/catalogue" } } }) {
      nodes {
        data {
          fr {
            childMarkdownRemark {
              html
            }
          }
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
      sort: {fields: data___Publication__date_, order: DESC }
    ) {
      nodes {
        id
        data {
          Auteur_livre
          Couverture {
            url
          }
          Titre
          Auteur
        }
      }
    }
    localSearchBooks {
      store
      index
    }
  }
`;
