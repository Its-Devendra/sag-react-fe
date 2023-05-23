import React from 'react';
import './../PageNotFound.css';
import { Button, ButtonVariant } from '../../../components';

export const PageNotFound3 = () => {
  return (
    <>
      <div className="page-not-found-container">
        <div className="page-not-found-container-text">
          <h1>404</h1>
          <div className="page-not-found-container-text-semi">
            <h2>Something Went</h2>
            <h2 className="spacial-color-text">Wrong!</h2>
          </div>
          <h3 className="samll-text-1">
            OOPs! The page you are looking for doesn’t exist.
          </h3>
          <h3 className="small-text-2">
            {' '}
            It might have been moved or deleted.
          </h3>
        </div>
        <Button className="button" variant={ButtonVariant.Primary}>
          Back to Home
        </Button>
        <img
          src="src\pages\PageNotFound\illustrations\Group 240.png"
          alt="error"
        />
      </div>
    </>
  );
};

// PageNotFound3.route = '/not-found';
