import React from 'react';
import {
  BrowserRouter as Router, Switch,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Layout } from 'antd';

import CatalogPage from 'Pages/Catalog';
import CoursePage from 'Pages/Course';
import LoginPage from 'Pages/Login';
import NotFoundPage from 'Pages/NotFound';
import Route from 'Components/Route';

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Helmet
        defaultTitle="أكاديمية تكوين"
        titleTemplate="أكاديمية تكوين | %s"
      />
      <Router>
        <Switch>
          <Route path="/" exact component={CatalogPage} />
          <Route path="/login" roles={['GUEST']} redirect="/app" exact component={LoginPage} />
          <Route path="/course/:courseId/:page/:lectureId" exact component={CoursePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Layout>
  );
}
