import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProSidebarProvider } from 'react-pro-sidebar';

// Add bootstrap to the project
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

import './index.css';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <ProSidebarProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProSidebarProvider>
  </GoogleOAuthProvider>,
);
