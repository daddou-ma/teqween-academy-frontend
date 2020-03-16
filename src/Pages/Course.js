import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import {
  MenuFoldOutlined, MenuUnfoldOutlined,
} from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { Layout } from 'antd';

import LecturePage from 'Pages/Lecture';
import { useViewport } from 'Providers/Viewport';
import { COURSE_BY_ID } from 'Graphql/queries/courses';

import CourseNav from 'Components/CourseNav';

export default function CoursePage() {
  const { screen } = useViewport();
  const [siderCollapsed, setSiderCollapsed] = useState(screen === 'mobile');
  const { courseId, lectureId } = useParams();
  const { loading, error, data } = useQuery(COURSE_BY_ID, {
    variables: { courseId: Number(courseId) },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { course } = data;
  const program = [
    ...course.chapters,
    ...course.rootLectures,
  ];

  const lecture = course.lectures.find((l) => l.id === lectureId);

  console.log(program);
  return (
    <Layout
      style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, right: 0,
      }}
    >
      <CourseNav
        program={program}
        siderCollapsed={siderCollapsed}
        chapterId={lecture.chapterId}
        lectureId={lecture.id}
      />
      <Layout>
        <Layout.Header style={{ background: '#fff' }}>
          {React.createElement(siderCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setSiderCollapsed(!siderCollapsed),
          })}
          {course.title}
          -
          <b>{lecture.title}</b>
        </Layout.Header>
        <Layout.Content style={{ padding: '24px 24px', overflowY: 'scroll' }}>
          <LecturePage
            title={lecture.title}
            description={lecture.description}
            videoUrl={lecture.videoUrl}
            content={lecture.content}
          />
        </Layout.Content>
        <Layout.Footer>
          مرحبا
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}
