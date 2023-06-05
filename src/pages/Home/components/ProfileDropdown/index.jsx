import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';

import {
  Button,
  ButtonVariant,
  Colors,
  Icon,
  IconIdentifier,
} from '../../../../components';

import './ProfileDropdown.css';
import { toStrictTitleCase } from '../../../../helpers/utils';
import { GlobalContext } from '../../../../context';
import { logout } from '../../../../helpers';
import { useNavigate } from 'react-router-dom';
import { Home } from '../../..';
import { generateProfileImage } from './helpers';

export const ProfileDropdown = () => {
  // Hooks.
  const navigate = useNavigate();

  // Context.
  const { loggedInUser } = useContext(GlobalContext);

  // Handlers.
  const onClickLogoutHandler = () => {
    logout();
    navigate(Home.route);
  };

  return (
    <Dropdown className="profile-dropdown">
      <Dropdown.Toggle
        as={Button}
        className="profile-dropdown__button"
        variant={ButtonVariant.Secondary}
        rightIconIdentifier={IconIdentifier.ChevronDown}
        leftIconProps={{ iconSize: 22 }}
        rightIconProps={{ iconSize: 10 }}
      >
        <img
          className="profile-dropdown__button__profile-image"
          src={loggedInUser ? generateProfileImage(loggedInUser.fullName) : ''}
        />
        <span className="profile-dropdown__button__username ellipsis">
          {toStrictTitleCase(loggedInUser?.fullName || '')}
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="profile-dropdown__menu">
        <Dropdown.Item
          className="profile-dropdown__menu__item profile-dropdown__menu__item--logout"
          onClick={onClickLogoutHandler}
        >
          <Icon
            iconIdentifier={IconIdentifier.Logout}
            color={Colors.LogoutRed}
            iconSize={16}
          />
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

ProfileDropdown.propTypes = {};
