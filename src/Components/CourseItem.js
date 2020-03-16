import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Tag, Badge, Button,
} from 'antd';
import { Link } from 'react-router-dom';

export default function CourseItem({
  id, title, description, price, image, tags,
}) {
  return (
    <Card
      cover={<img alt="example" src={image} />}
      actions={[
        <Badge status="default" text={`${price} دج` || 'مجانية'} key="price" />,
        <Link to={`/course/${id}`} key={id}>
          <Button type="primary">
            المتابعة
          </Button>
        </Link>,
      ]}
    >
      {tags.map((tag) => (
        <Tag color="default" key={tag}>
          {tag}
        </Tag>
      ))}
      <br />
      <br />
      <Card.Meta title={title} description={description} />
    </Card>
  );
}

CourseItem.defaultProps = {
  price: 0,
  tags: [],
};

CourseItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};
