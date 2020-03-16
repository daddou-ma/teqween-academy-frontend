import gql from 'graphql-tag';
import CourseFragment from 'Graphql/fragments/Course';
import ChapterFragment from 'Graphql/fragments/Chapter';
import LectureFragment from 'Graphql/fragments/Lecture';

export const COURSES = gql`
  query COURSES {
    courses: courses {
      ...CourseFragment
    }
  }
  ${CourseFragment}
`;

export const COURSE_BY_ID = gql`
  query COURSE_BY_ID($courseId: Int!) {
    course: courseById(courseId: $courseId) {
      ...CourseFragment
      chapters {
        ...ChapterFragment
        lectures {
          ...LectureFragment
        }
      }
      rootLectures {
        ...LectureFragment
      }
      lectures {
        ...LectureFragment
      }
    }
  }
  ${CourseFragment}
  ${ChapterFragment}
  ${LectureFragment}
`;
