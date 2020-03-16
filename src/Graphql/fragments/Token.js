import gql from 'graphql-tag';

const TokenFragment = gql`
  fragment TokenFragment on Token {
    name
    token
  }
`;

export default TokenFragment;
