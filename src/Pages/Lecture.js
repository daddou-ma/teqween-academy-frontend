import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Typography,
} from 'antd';

import ResponsivePlayer from 'Components/ResponsivePlayer';

const { Title, Paragraph } = Typography;

export default function LessonPage({
  title, description, content,
}) {
  return (
    <Layout style={{ background: '#fff', padding: '24px 24px' }}>
      <ResponsivePlayer style={{ margin: '0 auto 24px auto' }} url="https://www.youtube.com/watch?v=KybAvaM3b90" />
      <Title level={2} style={{ marginBottom: '8px' }}>{title}</Title>
      <Paragraph>{description}</Paragraph>
      <Paragraph>
        {content}
      </Paragraph>
    </Layout>
  );
}

LessonPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
