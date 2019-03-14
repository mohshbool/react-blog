import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

export default class PostListing extends React.Component {
  getShortBody = body => {
    console.log(body)
    body = body.slice(0, 340).split(' ')
    body.pop()
    return body.join(' ') + ' .....'
  }

  render() {
    const { id, title, body, image } = this.props.item
    return (
      <Container style={styles.container}>
        <Row>
          <Col md={2}>
            <Image src={require('../assets/small_images/' + image)} fluid style={styles.image} />
          </Col>
          <Col md={10}>
            <Row>
              <a href={'/post/' + id}><h6>{title}</h6></a>
            </Row>
            <Row>
              <p>{this.getShortBody(body)}</p>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

const styles = {
  container: {
    paddingTop: 5,
    paddingBottom: 15,
    justifyContent: 'center'
  },
  image: {
    marginTop: 5
  }

}