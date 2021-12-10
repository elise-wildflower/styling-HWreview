import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem;
  font-size: 1.8rem;
  color: #333;
  outline: none;
  border-radius: 5px;
  `

const Button = ({ children }) => {
  return(
    <StyledButton>{children}</StyledButton>
  )
}

export default Button