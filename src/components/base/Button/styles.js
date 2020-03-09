import styled, { css } from 'styled-components';

const styles = css`
  color: black;
`;

const variants = {
  green: css`
    background: green;
  `,
  blue: css`
    background: red;
  `,
};

// const screens = {

// };

const getVariantStyle = (vars) => ({ variant }) => vars[variant] || '';

const Button = styled.button`
  ${styles}
  ${getVariantStyle(variants)}
`;

export default Button;
