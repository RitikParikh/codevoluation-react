import React, { Component } from 'react'
import axios from 'axios';
import Modal from './Modal';

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts : [],
         modalData : []
      }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(({data})=>{
            this.setState({posts: data});
        });
    }

    
  render() {
    const {posts} = this.state;
   
    return (
        <>
        <table key ="table" className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="">Comments</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.length > 0 ?
                    posts.map((post,i) =>{
                        let postHashId = `#abc${post.id}`
                        return (
                       <>
                        <tr key={post.id} >
                            <th scope="row" >{post.id}</th>
                            <td >{post.title}</td>
                            <td><button type="button" data-bs-toggle="modal" data-bs-target={postHashId}>Check Comments</button></td>
                        </tr>
                        <Modal title={post.title} postId={post.id}/>
                       </>
                        
                    )}) :
                    null
                }
            </tbody>
        </table>
        
        </>
    )
  }
}

export default PostList