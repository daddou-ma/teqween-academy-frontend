import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/link-context';
import { GRAPH_URL } from 'Graphql/config';

// import { resolvers, typeDefs } from 'Graphql/state';

export { ApolloProvider } from '@apollo/client';

const httpLink = createHttpLink({
  uri: GRAPH_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  console.log('token', token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


export const createClient = async () => {
  const client = new ApolloClient({
    cache: new InMemoryCache({}),
    link: authLink.concat(httpLink),
    connectToDevTools: true,
    // resolvers,
    // typeDefs,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
      query: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all',
      },
    },
  });

  return client;
};
