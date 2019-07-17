import React, { Component } from 'react'

import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import './Blog.css'
import axios from 'axios'

class Blog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      selectedPostId: ''
    }
  }

  componentDidMount () {
    axios.get('/posts') // Sending a get request
      .then(response => {
        const posts = response.data.slice(0, 4)
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Steve'
          }
        })
        this.setState({ posts: updatedPosts })
        // console.log(response)
      })
      .catch(error => { // Handling errors, can do a lot of things here. E.g change state
        console.log(error)
      })
  }

  postClickedHandler (id) {
    this.setState({ selectedPostId: id })
  }

  render () {
    const posts = this.state.posts.map(post => {
      return <Post
        key={post.id}
        title={post.title}
        author={post.author}
        clicked={this.postClickedHandler.bind(this, post.id)} />
    })
    return (
      <div>
        <section className='Posts'>
          {posts}
        </section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    )
  }
}

export default Blog
