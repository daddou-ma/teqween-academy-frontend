import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';

export default function Button({ text, variant }) {
  return <StyledButton type="button" variant={variant}>{text}</StyledButton>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};
