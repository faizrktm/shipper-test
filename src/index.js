import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import './normalize.css';
import './index.css';
import Pages from './pages';
import * as serviceWorker from './serviceWorker';

// served on this sandbox https://codesandbox.io/s/gracious-elion-9p4kv?file=/index.js
const client = new ApolloClient({
  uri: 'https://9p4kv.sse.codesandbox.io/',
  cache: new InMemoryCache()
});

const App = () => (
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
