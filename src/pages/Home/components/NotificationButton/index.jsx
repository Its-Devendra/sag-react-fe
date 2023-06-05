import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Overlay } from 'react-bootstrap';

import {
  Button,
  ButtonVariant,
  Icon,
  IconIdentifier,
} from '../../../../components';
import { Illustration } from '../../../../assets/images';

import './NotificationButton.css';
import { isEmpty } from 'lodash';

export const NotificationButton = ({ notificationsList = [] }) => {
  // Hooks.
  const notificationButtonRef = useRef(null);

  // States.
  const [showNotificationOverlay, setShowNotificationOverlay] = useState(false);

  // Handlers.
  const onClickHandler = () => {
    setShowNotificationOverlay(!showNotificationOverlay);
  };

  // Renders.
  const renderNotificationsList = () => {
    if (isEmpty(notificationsList)) {
      return (
        <div className="w-100 h-100 notification-button__overlay__no-content">
          <img className="illustration" src={Illustration.BellCrossed} />
          <p>
            <strong>No Notifications Yet</strong>
            <br />
            You have no notifications right now.
            <br />
            Come back later.
          </p>
        </div>
      );
    }

    // TODO: Render notifications list.
    return (
      <>
        {notificationsList.map((notification, index) => (
          <div key={index}>{notification}</div>
        ))}
      </>
    );
  };

  return (
    <div>
      <Button
        ref={notificationButtonRef}
        onClick={onClickHandler}
        className="notification-button"
        variant={ButtonVariant.Secondary}
      >
        <Icon iconSize={22} iconIdentifier={IconIdentifier.Bell} />
      </Button>

      <Overlay
        show={showNotificationOverlay}
        target={notificationButtonRef.current}
        placement="bottom-end"
      >
        <div className="notification-button__overlay">
          {renderNotificationsList()}
        </div>
      </Overlay>
    </div>
  );
};

NotificationButton.propTypes = {
  notificationsList: PropTypes.array,
};
