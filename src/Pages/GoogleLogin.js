import React from 'react';
import { useMutation } from '@apollo/client';
import {
  Button, message,
} from 'antd';
import { useHistory } from 'react-router-dom';
import { LOGIN } from 'Graphql/mutations/auth';

import logo from 'Public/img/logo.h.png';

const key = 'updatable';

export default function LoginPage() {
  const history = useHistory();

  const [login] = useMutation(LOGIN, {
    onCompleted: ({ token }) => {
      window.localStorage.setItem('token', token.token);
      message.success({ content: 'Connected', key, duration: 2 });
      history.push('/home');
    },
    onError: () => {
      message.error({ content: 'Connected', key, duration: 2 });
    },
  });

  return (
    <div style={{ width: '400px', margin: 'auto' }}>
      <img src={logo} alt="logo" style={{ maxWidth: '180px', margin: '24px auto', display: 'block' }} />
      <Button type="primary" htmlType="submit" style={{ width: '100%' }} onClick={login}>
        Connect With Google
      </Button>
    </div>
  );
}
