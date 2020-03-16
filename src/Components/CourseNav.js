import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  PlayCircleOutlined, InfoCircleOutlined, FolderOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import logo from 'Public/img/logo.h.png';

export default function CourseNav({
  program, siderCollapsed, chapterId, lectureId,
}) {
  const selectedKey = chapterId ? `c-${chapterId}.l-${lectureId}` : `l-${lectureId}`;
  return (
    <Layout.Sider
      collapsed={siderCollapsed}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={console.log}
      onCollapse={console.log}
      width={320}
    >
      <div style={{ background: 'white' }}>
        <img src={logo} alt="logo" style={{ height: 32, margin: 16 }} />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={[selectedKey]}
        defaultOpenKeys={[`c-${chapterId}`]}
        style={{ height: '100%' }}
      >
        <Menu.Item key="0" icon={<InfoCircleOutlined />}>مقدمة</Menu.Item>
        {program.map(({
          id, title, courseId, lectures, __typename,
        }) => {
          if (__typename === 'Chapter') {
            return (
              <Menu.SubMenu key={`c-${id}`} icon={<FolderOutlined />} title={title}>
                {lectures.map((l) => (
                  <Menu.Item key={`c-${id}.l-${l.id}`} icon={<PlayCircleOutlined />}>
                    <Link to={`/course/${l.courseId}/lecture/${l.id}`}>
                      {l.title}
                    </Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            );
          }

          return (
            <Menu.Item key={`l-${id}`} icon={<PlayCircleOutlined />}>
              <Link to={`/course/${courseId}/lecture/${id}`}>
                {title}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Layout.Sider>
  );
}

CourseNav.defaultProps = {
  siderCollapsed: false,
  chapterId: 0,
  lectureId: 0,
};

CourseNav.propTypes = {
  program: PropTypes.objectOf(Object).isRequired,
  siderCollapsed: PropTypes.bool,
  chapterId: PropTypes.number,
  lectureId: PropTypes.number,
};
