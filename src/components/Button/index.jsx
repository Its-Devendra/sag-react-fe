import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Button as BootstrapButton, Spinner } from 'react-bootstrap';
import './Button.css';
import Icon, { IconIdentifier } from '../Icon';
import { isNull } from 'lodash';
import { Colors } from '../helpers';

export const ButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
};
const IconColorMapping = {
  [ButtonVariant.Primary]: Colors.White,
  [ButtonVariant.Secondary]: Colors.Primary,
};

const Button = React.forwardRef(
  (
    {
      onClick,
      children,
      isLoading = false,
      variant = ButtonVariant.Primary,
      className = '',
      leftIconIdentifier = null,
      leftIconProps = null,
      rightIconIdentifier = null,
      rightIconProps = null,
      fontColor = null,
      ...rest
    },
    ref,
  ) => {
    const classNames = [`sag-button--${variant}`, className];

    if (isLoading) {
      classNames.push('sag-button--loading');
    }

    // Renders.
    const renderLeftIcon = () => {
      if (!isLoading && isNull(leftIconIdentifier)) {
        return;
      }

      return (
        <div className="sag-button__icon__container--left">
          {isLoading ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="sag-button__icon__spinner"
            />
          ) : (
            <Icon
              className="sag-button__icon--left"
              color={fontColor || IconColorMapping[variant]}
              iconIdentifier={leftIconIdentifier}
              {...leftIconProps}
            />
          )}
        </div>
      );
    };

    const renderRightIcon = () => {
      if (isNull(rightIconIdentifier)) {
        return;
      }

      return (
        <div className="sag-button__icon__container--right">
          <Icon
            className="sag-button__icon--left"
            color={fontColor || IconColorMapping[variant]}
            iconIdentifier={rightIconIdentifier}
            {...rightIconProps}
          />
        </div>
      );
    };

    return (
      <BootstrapButton
        ref={ref}
        variant="primary"
        className={classNames.join(' ')}
        onClick={onClick}
        style={{ color: fontColor }}
        {...rest}
      >
        {renderLeftIcon()}

        {Children.toArray(children)}

        {renderRightIcon()}
      </BootstrapButton>
    );
  },
);

Button.displayName = 'Button';

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  variant: PropTypes.oneOf(Object.values(ButtonVariant)),
  className: PropTypes.string,
  leftIconIdentifier: PropTypes.oneOf(Object.values(IconIdentifier)),
  leftIconProps: PropTypes.shape({
    ...Icon.propTypes,
    iconIdentifier: PropTypes.string,
  }),
  rightIconIdentifier: PropTypes.oneOf(Object.values(IconIdentifier)),
  rightIconProps: PropTypes.shape({
    ...Icon.propTypes,
    iconIdentifier: PropTypes.string,
  }),
  fontColor: PropTypes.oneOf(Object.values(Colors)),
};

export default Button;
