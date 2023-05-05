import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Illustration } from '../../assets/images';
import { Button, ButtonVariant, IconIdentifier } from '../../components';
import { Home } from '../Home';

import { useGoogleLoginRequest } from '../../api';
import { TokenManager } from '../../helpers';
import { toast } from 'react-toastify';

import './Login.css';

export const Login = () => {
  // States.
  const [isGoogleLoginButtonLoading, setIsGoogleLoginButtonLoading] =
    useState(false);

  // Hooks.
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const {
    mutate: sendGoogleLoginRequest,
    data: googleLoginRequestResponse,
    isSuccess: isSuccessGoogleLoginRequest,
    error: googleLoginRequestError,
    isError: isErrorGoogleLoginRequest,
  } = useGoogleLoginRequest();

  // UseEffects.
  useEffect(() => {
    if (isSuccessGoogleLoginRequest && googleLoginRequestResponse) {
      const { accessToken, refreshToken } = googleLoginRequestResponse;

      TokenManager.saveRefreshToken(refreshToken);
      TokenManager.saveToken(accessToken);

      setIsGoogleLoginButtonLoading(false);

      toast.success('Logged in Successfully!');

      navigate(Home.route);
    } else if (isErrorGoogleLoginRequest && googleLoginRequestError) {
      toast.error('Could not login.');

      setIsGoogleLoginButtonLoading(false);
    }
  }, [googleLoginRequestError, googleLoginRequestResponse]);

  useEffect(() => {
    const authCode = searchParams.get('code');
    if (authCode) {
      // Delete search params from URL.
      const emptyUrlSearchParams = new URLSearchParams();
      setSearchParams(emptyUrlSearchParams);

      setIsGoogleLoginButtonLoading(true);

      sendGoogleLoginRequest({ authCode });
    }
  }, [searchParams]);

  // Handlers.
  const onClickSignInHandler = () => {
    setIsGoogleLoginButtonLoading(!isGoogleLoginButtonLoading);

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&access_type=offline&include_granted_scopes=true&response_type=code&redirect_uri=${import.meta.env.VITE_GOOGLE_LOGIN_REDIRECT_URI.toString()}&client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID.toString()}`;
    window.open(authUrl, '_self');
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <div className="title">Get Started with SAG</div>
        <img className="illustration" src={Illustration.UserChilling} />
        <Button
          isLoading={isGoogleLoginButtonLoading}
          leftIconIdentifier={IconIdentifier.Google}
          className="login-form-button"
          variant={ButtonVariant.Secondary}
          onClick={() => onClickSignInHandler()}
        >
          Sign-in with Google
        </Button>
      </div>
      <img className="illustration" src={Illustration.UserInDoubt} />
    </div>
  );
};

Login.route = '/login';
