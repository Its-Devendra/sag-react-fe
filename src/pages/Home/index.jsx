import React, { useContext, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button, ButtonVariant } from '../../components';
import {
  NotificationButton,
  ProfileDropdown,
  PageWrapper,
  SideBar,
} from './components';
import { isAuthenticated, logout } from '../../helpers';
import { Login } from '../Login';
import './Home.css';
import { userLoggedInUserInfo as useLoggedInUserInfo } from '../../api/user/user-api';
import { GlobalContext } from '../../context';
import { toast } from 'react-toastify';

export const Home = () => {
  // React Router Hooks.
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Context.
  const { setLoggedInUser } = useContext(GlobalContext);

  // API Hooks.
  const {
    data: loggedInUserResponse,
    isSuccess: isSuccessLoggedInUserRequest,
    isError: isErrorLoggedInUserRequest,
  } = useLoggedInUserInfo(isAuthenticated());

  // UseEffects.
  useEffect(() => {
    if (isSuccessLoggedInUserRequest && loggedInUserResponse) {
      setLoggedInUser(loggedInUserResponse);
    } else if (isErrorLoggedInUserRequest) {
      toast.error("Couldn't fetch user info");
      logout();
    }
  }, [
    loggedInUserResponse,
    isSuccessLoggedInUserRequest,
    isErrorLoggedInUserRequest,
  ]);

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

    return (
      <>
        <NotificationButton />
        <ProfileDropdown />
      </>
    );
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
