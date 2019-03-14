import React from 'react';
import { Container } from 'react-bootstrap'

import PostListing from '../components/PostListing'

import { posts } from '../assets/paragraphs'

export default class Home extends React.Component {
  posts = []

  componentWillMount = () => {
    for (let item of Object.values(posts)) {
      this.posts.push(this.renderItem(item))
    }
    console.log(this.posts)
  }

  renderItem = item => {
    return (
      <PostListing item={item} />
    )
  }

  render() {
    return (
      <Container>
        {!!this.posts && this.posts}
      </Container>
    );
  }
}
