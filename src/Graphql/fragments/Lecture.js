import gql from 'graphql-tag';

const LectureFragment = gql`
  fragment LectureFragment on Lecture {
    id
    title
    description
    content
    courseId
    chapterId
    order
  }
`;

export default LectureFragment;
