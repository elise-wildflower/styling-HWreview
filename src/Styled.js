import React from 'react';
import styled from 'styled-components'
import Button from './components/Button';

const MainWrapper = styled.div`
  width: 100%;
  margin: 10px;
`

function Styled() {
  return (
    <MainWrapper>
      <Button>Styled Button</Button>
    </MainWrapper>
  );
}

export default Styled;