import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';

import 'antd/dist/antd.less'; // or 'antd/dist/antd.css

import { ViewportProvider } from 'Providers/Viewport';
import App from 'Src/App';

import { createClient, ApolloProvider } from 'Graphql/index';

(async () => {
  const client = await createClient();

  ReactDOM.render(
    <ApolloProvider client={client}>
      <ConfigProvider direction="rtl">
        <ViewportProvider breakpoint={720}>
          <App client={client} />
        </ViewportProvider>
      </ConfigProvider>
    </ApolloProvider>,
    document.getElementById('root'),
  );
})();
