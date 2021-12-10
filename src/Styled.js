import React from 'react';
import styled from 'styled-components'
import Button from './components/Button';

const MainWrapper = styled.div`
  padding: 30px;
`

const Title = styled.h1`
  font-size: 4rem;
  color: #fbfbfb;
`

const Section = styled.section`
  margin: 30px;
`

const Content = styled.section`
  // color: ${props => props.red ? "red" : "#dcdcdc"};
  color: #dcdcdc;
  font-size: 1.2rem;

`

const RedContent = styled(Content)`
  color: red;
  border-color: maroon;
`

function Styled() {
  return (
    <MainWrapper>
      <Title>My Styled Components</Title>
      <Button primary>Primary Button</Button>
      <Button>Styled Button</Button>
      <Section>
        <Content red>
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
        </Content>  
        <RedContent>
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
        </RedContent>
      </Section>
    </MainWrapper>
  );
}

export default Styled;