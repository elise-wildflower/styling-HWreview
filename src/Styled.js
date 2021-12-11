import React from 'react';
import MyButton from './components/Button'
import {MainWrapper, Title, Section, Content, RedContent} from './components/StyledC'


function Styled() {
  return (
    <MainWrapper>
      <Title>Styled Components</Title>
      <MyButton primary>Primary Styled Button</MyButton>
      <MyButton>Styled Button</MyButton>
      <Section>
        <Content>
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
        </Content>
        <Content red>
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
          This is where I write a cool article about something I love.
        </Content>
      </Section>
    </MainWrapper>
  );
}

export default Styled;