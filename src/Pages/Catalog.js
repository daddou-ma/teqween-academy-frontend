import React from 'react';
import { useQuery } from '@apollo/client';
import { Layout } from 'antd';
import { Composition } from 'atomic-layout';

import CourseItem from 'Components/CourseItem';
import { COURSES } from 'Graphql/queries/courses';

export default function CatalogPage() {
  const { loading, error, data } = useQuery(COURSES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { courses } = data;

  const courseCards = courses.map(({
    id, title, description, price, imageUrl, tags,
  }) => (
    <CourseItem
      id={id}
      title={title}
      description={description}
      price={price}
      image={imageUrl}
      tags={tags}
      key={id}
    />
  ));

  return (
    <Layout style={{ maxWidth: '1080px', margin: '24px auto' }}>
      <Composition
        templateCols="repeat(auto-fit, 250px)"
        templateColsMd="repeat(2, 1fr)"
        templateColsLg="repeat(auto-fit, minmax(250px, 1fr))"
        justifyContent="center"
        gutter={15}
        gutterLg={25}
      >
        {courseCards}
      </Composition>
    </Layout>
  );
}
