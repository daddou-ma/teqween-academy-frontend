export const lessonTypeDef = `
  Lesson: {
      id: ID!
      title: String!
      description: String!
      videoUrl: String
      content: String
      tags: [String]
      courseId: Integer!
      chapterId: Integer
      order: Integer!
  }
`;

export const empty = '';
