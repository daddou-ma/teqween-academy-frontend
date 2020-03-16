import gql from 'graphql-tag';

const UserFragment = gql`
  fragment UserFragment on User {
    id
    email
    type
  }
`;

export default UserFragment;
