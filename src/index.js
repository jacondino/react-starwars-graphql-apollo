import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from './services/apollo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'));