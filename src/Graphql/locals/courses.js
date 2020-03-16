
const courses = [{
  __typename: 'Course',
  id: 1,
  title: 'تطوير تطبيق ويب لمؤتمرات الفيديو',
  description: `
    تطوير التطبيق ويب من البداية بالإعتماد على لغة الـ Javascript و مكتبة Peer.js التي تسمح لنا بإنشاء إتصالات بالصوت و الصورة
  `,
  price: 4500,
  image: 'https://cdn.talentsroot.com/upload/root/1586700225_3511648024090725.jpg',
  tags: ['web', 'javascript'],
}, {
  __typename: 'Course',
  id: 1,
  title: 'تطوير تطبيق ويب لمؤتمرات الفيديو',
  description: `
    تطوير التطبيق ويب من البداية بالإعتماد على لغة الـ Javascript و مكتبة Peer.js التي تسمح لنا بإنشاء إتصالات بالصوت و الصورة
  `,
  price: 4500,
  image: 'https://cdn.talentsroot.com/upload/root/1586700225_3511648024090725.jpg',
  tags: ['web', 'javascript'],
}, {
  __typename: 'Course',
  id: 1,
  title: 'تطوير تطبيق ويب لمؤتمرات الفيديو',
  description: `
    تطوير التطبيق ويب من البداية بالإعتماد على لغة الـ Javascript و مكتبة Peer.js التي تسمح لنا بإنشاء إتصالات بالصوت و الصورة
  `,
  price: 4500,
  image: 'https://cdn.talentsroot.com/upload/root/1586700225_3511648024090725.jpg',
  tags: ['web', 'javascript'],
}];

const lessons = [{
  __typename: 'Lesson',
  id: 1,
  title: 'مبدأ عمل الـ WebRTC',
  description: 'مبدأ عمل البروتوكول WebRTC',
  videoUrl: 'https://www.youtube.com/watch?v=BqrXWTV6D4U',
  content: `في هذا الفيديو غادي نهدرو على ناحية النظرية من المشروع تطبيق مؤامرات الفيديو. الهدف منه نفهمو مبدأ عمل البروتوكول WebRTC. و نحظرو للمرحلة تع تطبيق.

  الروابط لتحميل البرامج اللازمة :
  
  1 - Nodejs : https://nodejs.org/en/download/
  2 - VS Code : https://code.visualstudio.com/download
  3 - Google Chrome : https://www.google.com/chrome/
  4 - Source Code : https://github.com/daddou-ma/teqween-...
  5 - TURN Server : حلو حساب هنا https://numb.viagenie.ca/
  `,
  courseId: 1,
  chapterId: 1,
  order: 1,
  tags: ['Theory', 'WebRTC', 'Video Conference', 'Realtime'],
}, {
  __typename: 'Lesson',
  id: 2,
  title: 'مثال تطبيقي',
  description: 'أبسط مثال يمكن إنجازه',
  videoUrl: 'https://youtu.be/KFdG2ugHGts',
  content: `في هذا الفيديو غادي نديرو تطبيق لواش تعلمنا من الفيديو الماضية. و نطورو أبسط مثال ممكن. باش نجربو Video Conference على الأنترنت مع صحابنا
  
  رابط كود المبدئي :
  https://github.com/daddou-ma/teqween-conf
  
  رابط TURN Server مجاني :
  https://numb.viagenie.ca/
  
  رابط TURN Server خاص بتكوين  
  صالح ل 30 يوم
  URL : turn.teqween.com
  USER : teqween
  PASS : teqween
  `,
  courseId: 1,
  chapterId: 1,
  order: 1,
  tags: ['WebRTC', 'Video Conference', 'Realtime'],
}, {
  __typename: 'Lesson',
  id: 3,
  title: 'الواجهة الرئيسية',
  description: 'الواجهة الرئيسية للبرنامح',
  videoUrl: 'https://youtu.be/S04jTSMPuFg',
  content: `
  بعد ما جربنا مثال  تطبيقي في الفيديو لي فاتت دروك نبدو من جديد بكود منظم أكثر و غادي نبدو بالواجهة تع التطبيق
  
  رابط كود :
  https://github.com/teqween/teqween-conf
  `,
  courseId: 1,
  chapterId: 2,
  order: 1,
  tags: ['WebRTC', 'Video Conference', 'Realtime'],
}, {
  __typename: 'Lesson',
  id: 4,
  title: 'واجهة التنبيه',
  description: 'واجهة التنبيه',
  videoUrl: 'https://youtu.be/I7nRe7hBtrQ',
  content: `في هذي الفيديو غادي نديرو الواجهة تع التنبيه عند إستقبال إتصال

  رابط كود :
  https://github.com/teqween/teqween-conf
  
  رابط المشروع النهائي :
  http://teqween-conf.herokuapp.com
  
  للإشتراك في صفحة الـ facebook :
  https://www.facebook.com/teqween.academy`,
  courseId: 1,
  chapterId: 2,
  order: 2,
  tags: ['Theory', 'WebRTC', 'Video Conference', 'Realtime'],
}, {
  __typename: 'Lesson',
  id: 5,
  title: 'واجهة الإتصال',
  description: 'واجهة الإتصال',
  videoUrl: 'https://youtu.be/s6Y9wR-9Lq8',
  content: `ي هذي الفيديو غادي نديرو الواجهة تع غرفة الإتصال و UI Manager

  رابط كود :
  https://github.com/teqween/teqween-conf
  
  رابط المشروع النهائي :
  http://teqween-conf.herokuapp.com
  `,
  courseId: 1,
  chapterId: 2,
  order: 3,
  tags: ['Theory', 'WebRTC', 'Video Conference', 'Realtime'],
}, {
  __typename: 'Lesson',
  id: 6,
  title: 'مدير الإتصالات - جزء الأول',
  description: 'مدير الإتصالات',
  videoUrl: 'https://youtu.be/BqrXWTV6D4U',
  content: `في هذي الفيديو غادي نديرو كود تع مدير الإتصالات لي يسهل علينا التعامل مع الإتصلات و life cycle  تع الإتصال

  رابط كود :
  https://github.com/teqween/teqween-conf
  
  رابط المشروع النهائي :
  http://teqween-conf.herokuapp.com`,
  courseId: 1,
  chapterId: 3,
  order: 1,
  tags: ['Theory', 'WebRTC', 'Video Conference', 'Realtime'],
}];

const chapters = [{
  __typename: 'Chapter',
  id: 1,
  title: 'مقدمة',
  description: 'مقدمة بسيطة',
  courseId: 1,
  order: 1,
}, {
  __typename: 'Chapter',
  id: 2,
  title: 'واجهة المستخدم',
  description: 'لجعل التطبيق أكثر تفاعلا مع المستخدم',
  courseId: 1,
  order: 2,
}, {
  __typename: 'Chapter',
  id: 3,
  title: 'مدير الإتصالات',
  description: 'تعامل مع مختلف مراحل الإتضال',
  courseId: 1,
  order: 3,
}];

export const Course = {
  chapters: (course) => chapters.filter((chapter) => (chapter.courseId === course.id)),
  lessons: (course) => lessons.filter((lesson) => (lesson.courseId === course.id)),
};

export const courseQueries = {
  allCourses: () => (courses),
  courseById: (_, { courseId }) => {
    const course = courses.find((c) => (c.id === Number(courseId)));
    return course;
  },
};

export const courseMutations = {

};

export const courseTypeDef = `
  Course: {
      id: ID!
      title: String!
      description: String!
      price: Integer!
      image: String
      tags: [String]
  }
`;
