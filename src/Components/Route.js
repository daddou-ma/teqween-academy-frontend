import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { ME } from 'Graphql/queries/users';

export default function PrivateRoute({
  roles, redirect, ...props
}) {
  const { loading, error, data } = useQuery(ME);
  console.log(loading, error, data);

  const location = useLocation();
  let authorized = false;

  if (
    (roles.includes('ANY'))
    || (data && roles.includes(data.me.type))
    || (!data && roles.includes('GUEST'))
  ) {
    authorized = true;
  }
  return (
    !authorized ? (
      <Redirect to={{ pathname: redirect, state: { from: location } }} />
    ) : (
      <Route {...props} />
    )
  );
}

PrivateRoute.defaultProps = {
  roles: ['ANY'],
  redirect: '/login',
};

PrivateRoute.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string),
  redirect: PropTypes.string,
};
