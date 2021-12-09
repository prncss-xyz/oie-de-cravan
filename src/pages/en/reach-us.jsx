import Main from '/src/templates/nous-rejoindre';
import { graphql } from 'gatsby';

export default function Page({ ...props }) {
  return <Main fr='/nous-rejoindre' {...props} />;
}

export const queryStr = graphql`
  query EnReachUsQuery {
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
    allAirtableTextesDuSite(filter: { data: { url: { eq: "/nous-rejoindre" } } }) {
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
