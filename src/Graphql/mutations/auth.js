import gql from 'graphql-tag';
import TokenFragment from 'Graphql/fragments/Token';

export const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    token: login(data: {email: $email, password: $password}) {
      ...TokenFragment
    }
  }
  ${TokenFragment}
`;

export default 'default';
