import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Colors, Icon, IconIdentifier } from '..';
import './Toast.css';

const ToastManager = () => {
  const closeButton = ({ closeToast }) => {
    return (
      <Icon
        iconSize={16}
        className="sag-toast__close-icon"
        iconIdentifier={IconIdentifier.Cross}
        onClick={closeToast}
        color={Colors.Black400}
      />
    );
  };

  return (
    <ToastContainer
      toastClassName="sag-toast"
      bodyClassName="sag-toast__body"
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      closeButton={closeButton}
    />
  );
};

export default ToastManager;
