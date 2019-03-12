import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap'

import { paragraphs } from '../assets/paragraphs'

export default class Home extends Component {
  cards  = []

  componentWillMount = () => {
    for (let item of Object.values(paragraphs)) {
      this.cards.push(this.renderItem(item))
    }
  }

  renderItem = item => {
    return (
      <Card>
        <Card.Body>
          <Card.Text>
            {item}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

  render() {
    return (
      <Container>
        {!!this.cards && this.cards}
      </Container>
    );
  }
}
