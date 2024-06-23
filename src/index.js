import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-gd7hoyrn8xizvqhj.us.auth0.com"
    clientId="a4Og4in8WEn4IF3WzqenXYNEJJ3sNHP2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <ShopContextProvider>
    <App />
  </ShopContextProvider>   
  </Auth0Provider>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
