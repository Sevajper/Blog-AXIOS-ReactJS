import React, { Component } from 'react'
import './NewPost.css'
import axios from 'axios'

class NewPost extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      author: ''
    }
  }

  PostDataHandler () { // Sending a post request, Status code 201
    const data = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author
    }
    axios.post('/posts', data) // Change url here to check error, default url in index.js
      .then(response => {
        window.alert('Post sent to dummy backend!\nStatus ' +
        response.status + '\nCheck console!')
        console.log(response)
      })
      .catch(error => {
        window.alert(error)
        console.log(error)
      })
  }
  render () {
    return (
      <div className='NewPost'>
        <h1>Add a Post</h1>
        <label>Title</label>
        <input type='text' value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
        <label>Content</label>
        <textarea rows='4' value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
        <label>Author</label>
        <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
          <option value='Tom'>Tom</option>
          <option value='Steve'>Steve</option>
          <option value='Alex'>Alex</option>
          <option value='Jones'>Jones</option>
        </select>
        <button onClick={this.PostDataHandler.bind(this)}>Add Post</button>
      </div>
    )
  }
}

export default NewPost
