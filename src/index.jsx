import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProSidebarProvider } from 'react-pro-sidebar';

// Add bootstrap to the project
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// Add react-toastify
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import App from './app';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './api';
import { ToastManager } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ToastManager />
    <QueryClientProvider client={queryClient}>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </QueryClientProvider>
  </>,
);
