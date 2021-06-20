import Main from '/src/templates/nous-rejoindre';
import { graphql } from 'gatsby';

export default function Page({ ...props }) {
  return <Main fr='/nous-rejoindre' {...props} />;
}

export const queryStr = graphql`
  query EnReachUsQuery {
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
    allAirtableTexteDuSite(filter: { data: { url: { eq: "/nous-rejoindre" } } }) {
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
