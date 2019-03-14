import React from 'react'
import { Container, Image } from 'react-bootstrap'

import { posts } from '../assets/paragraphs'

export default class Post extends React.Component {
  componentWillMount() {
    this.post = this.getPost(this.props.match.params.id)
  }

  getPost = id => {
    for (let item of Object.values(posts)) {
      console.log(item, id)
      if (item.id === id) return item
    }
  }

  render() {
    const { title, body, image } = this.post
    return (
      <Container style={{justifyContent: 'center', alignContent: 'center'}}>
        <div style={{flex: 1, alignSelf: 'center', marginTop: 8, marginBottom: 12, marginLeft: 20}}>
          <h3>{title}</h3>
        </div>
        <div style={{flex: 1}}>
          <Image src={require('../assets/large_images/' + image)} style={{width: '100%', marginRight: 10, marginLeft: 10}}/>
        </div>
        <div style={{flex: 1, marginTop: 25, marginBottom: 20, marginRight: 20, marginLeft: 30}}>
        <p style={{fontSize: 22}}>{body}</p>
        </div>
      </Container>
    )
  }
}