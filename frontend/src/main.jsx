import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render( 
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);


