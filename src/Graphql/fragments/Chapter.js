import gql from 'graphql-tag';

const ChapterFragment = gql`
  fragment ChapterFragment on Chapter {
    id
    title
    description
    courseId
    order
  }
`;

export default ChapterFragment;
