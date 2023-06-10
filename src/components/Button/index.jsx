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
      isLoading = false,
      onClick,
      variant = ButtonVariant.Primary,
      className = '',
      leftIconIdentifier = null,
      children,
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
            />
          )}
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
      </BootstrapButton>
    );
  },
);

Button.displayName = 'Button';

Button.propTypes = {
  isLoading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(Object.values(ButtonVariant)),
  className: PropTypes.string,
  leftIconIdentifier: PropTypes.oneOf(Object.values(IconIdentifier)),
  children: PropTypes.node.isRequired,
  fontColor: PropTypes.oneOf(Object.values(Colors)),
};

export default Button;
