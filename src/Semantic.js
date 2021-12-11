import React from 'react';
import { Card, Container, Grid, Header, Button, Segment } from 'semantic-ui-react';


function Semantic() {
  return (
    <Segment inverted color='black' padded>
      <Header size="huge">
        Semantic
      </Header>
      <Button color="yellow">Primary Button</Button>
      <Button>Button</Button>
    </Segment>
  );
}

export default Semantic;