import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
  margin-right: 10px;
  padding: .5rem;
  font-size: 1rem;
  outline: none;
  border-radius: 5px;
  background-color: ${props => (props.primary && "#E4E5B8")};
  color: ${props => (props.primary ? "#696969" : "#566344")};

  &:hover {
    background-color: ${props => (props.primary ? "#f3f5c1" : "#fff" )};
}
`

const MyButton = ({children, primary}) => {
  return (
    <StyledButton primary={primary}>{children}</StyledButton>
  )
}

export default MyButton