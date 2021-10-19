import React from 'react';
import ReactDOM from 'react-dom';
import './theme/index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { GlobalProvider } from './context/GlobalState';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience = process.env.REACT_APP_JWT_AUDIENCE;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    useRefreshTokens={true}
    cacheLocation='localstorage'
    audience={audience}
    scope='manage:todos'
  >
    <GlobalProvider> 
    <App />
    </GlobalProvider>,
  </Auth0Provider>,
  document.getElementById('root')
);
