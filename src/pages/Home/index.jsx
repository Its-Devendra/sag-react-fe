import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button, ButtonVariant } from '../../components';
import { NotificationButton, PageWrapper, SideBar } from './components';
import { isAuthenticated } from '../../helpers';
import { Login } from '../Login';
import './Home.css';

export const Home = () => {
  // Hooks.
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Handlers.
  const onClickLoginHandler = () => {
    navigate(Login.route);
  };

  // Renders.
  const renderProfileButtons = () => {
    if (pathname === Login.route) {
      return;
    }

    if (!isAuthenticated()) {
      return (
        <Button variant={ButtonVariant.Secondary} onClick={onClickLoginHandler}>
          Login
        </Button>
      );
    }

    return <NotificationButton />;
  };

  return (
    <div className="home">
      {/* Profile Button Components */}
      <div className="home__profile-buttons-container">
        {renderProfileButtons()}
      </div>

      {/* Navigation Panel Component */}
      <SideBar />

      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </div>
  );
};

Home.route = '/';
