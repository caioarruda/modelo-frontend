import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Router from './router';
import theme from './theme';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from './store/store';
const local = 'http://localhost:5500/graphql';
const prod = 'https://c2atec.com:5500/graphql';
const client = new ApolloClient({
  uri: process.env.REACT_APP_SIMULATE ? prod : local,
  cache: new InMemoryCache()
});
ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </ApolloProvider>
  </Provider>,
  document.querySelector('#root')
);
