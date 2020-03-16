import gql from 'graphql-tag';
import UserFragment from 'Graphql/fragments/User';

export const ME = gql`
  query ME {
    me: me {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const QUERY = gql`
query ME {
  me: me {
    ...UserFragment
  }
}
${UserFragment}
`;
