import React from 'react';
import { PageNotFound1 } from './pages/PageNotFound1';
import { PageNotFound2 } from './pages/PageNotFound2';
import { PageNotFound3 } from './pages/PageNotFound3';
import { PageNotFound4 } from './pages/PageNotFound4';

export const PageNotFound = () => {
  return (
    <div>
      <PageNotFound1></PageNotFound1>
    </div>
  );
};

PageNotFound.route = '/not-found';
