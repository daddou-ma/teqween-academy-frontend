import gql from 'graphql-tag';

const CourseFragment = gql`
  fragment CourseFragment on Course {
    id
    title
    shortDescription
    description
    price
    imageUrl
  }
`;

export default CourseFragment;
