import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 4rem;
  color:#fbfbfb;
`

export const MainWrapper = styled.div`
  padding: 30px;
`

export const Section = styled.div`
  margin: 30px;
`

export const Content = styled.div`
  color: ${props => props.red ? "red" : "#dcdcdc"};
  font-size: 1.2rem;
`