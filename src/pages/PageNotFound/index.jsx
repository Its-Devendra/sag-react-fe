import React from 'react';
import { PageNotFound1 } from './pages/PageNotFound1';
import { PageNotFound2 } from './pages/PageNotFound2';
import { PageNotFound3 } from './pages/PageNotFound3';
import { PageNotFound4 } from './pages/PageNotFound4';

const PageNotFound = () => {
  const NotFoundPages = [
    PageNotFound1,
    PageNotFound2,
    PageNotFound3,
    PageNotFound4,
  ];

  const RandomNotFound =
    NotFoundPages[Math.floor(Math.random() * NotFoundPages.length)];

  return <RandomNotFound />;
};

export default PageNotFound;

PageNotFound.route = '/not-found';
