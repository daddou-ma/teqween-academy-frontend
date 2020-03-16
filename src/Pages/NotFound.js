import React from 'react';
import { Result, Button } from 'antd';

export default function NotFoundPage() {
  return (
    <div style={{ margin: 'auto' }}>
      <Result
        status="404"
        title="404"
        subTitle="عذرا, هذه الصفحة غير موجودة"
        extra={<Button type="primary">الرجوع للصفحة الرئيسية</Button>}
      />
    </div>
  );
}
