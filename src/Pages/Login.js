import React from 'react';
import { useMutation } from '@apollo/client';
import {
  Form, Input, Button, message, Divider,
} from 'antd';
import { UserOutlined, EllipsisOutlined, GoogleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';
import { LOGIN } from 'Graphql/mutations/auth';

import logo from 'Public/img/logo.h.png';

const key = 'updatable';

export default function LoginPage() {
  const history = useHistory();

  const [login] = useMutation(LOGIN, {
    onCompleted: ({ token }) => {
      window.localStorage.setItem('token', token.token);
      message.success({ content: 'تم الدخول بنجاح', key, duration: 2 });
      history.push('/home');
    },
    onError: () => {
      message.error({ content: 'يرجى التأكد من المعومات', key, duration: 2 });
    },
  });

  const { signIn, loaded } = useGoogleLogin({
    onSuccess: async ({ code }) => {
      const result = await fetch('http://localhost:3333/auth/google/callback', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
      console.info(result, code);
    },
    clientId: '701151745606-ue6ec1k0dip909hchvlkakkplcfp2pht.apps.googleusercontent.com',
    onFailure: () => {
      message.error({ content: 'أعد مجددا', key, duration: 2 });
    },
    uxMode: 'redirect',
    redirectUri: 'http://localhost:3333/auth/google/callback',
    accessType: 'offline',
    scope: 'email profile',
    responseType: 'code',
    onRequest: console.log,
  });

  return (
    <div style={{ width: '400px', margin: 'auto' }}>
      <img src={logo} alt="logo" style={{ maxWidth: '180px', margin: '24px auto', display: 'block' }} />
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={(lolo) => {
          message.loading({ content: 'التأكد من البيانات', key, duration: 0 });
          login({ variables: lolo });
        }}
        onFinishFailed={console.log}
      >
        <Form.Item
          name="email"
          rules={[{
            required: true,
            message: 'يرجى إدخال البريد الإلكتروني',
          }, {
            pattern: /(.*)@gmail.com$/,
            message: 'يرجى إستعمال بريد gmail لا بغيت زعما',
          }]}
        >
          <Input placeholder="البريد الإلكتروني Gmail" prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{
            required: true,
            message: 'يرجى إدخال كلمة السر',
          }]}
        >
          <Input.Password placeholder="كلمة السر" prefix={<EllipsisOutlined />} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            تسجيل الدخول
          </Button>
        </Form.Item>
      </Form>
      <Divider plain>أو</Divider>
      <Button disabled={!loaded} type="default" style={{ width: '100%' }} onClick={signIn}>
        دخول بحساب جوجل
        <GoogleOutlined />
      </Button>
    </div>
  );
}
