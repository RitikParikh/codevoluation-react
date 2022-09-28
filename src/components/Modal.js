import React, { Component } from 'react';
import axios from 'axios';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : this.props.title,
            postId : this.props.postId,
            comments : []
        }
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.postId}/comments`).then(({data})=>{
            this.setState({comments: data});
        });
    }
  render() {
    let {title, postId,comments} = this.state;
    return (
        <div className="modal fade" id={"abc"+postId.toString()} key={"modal"+postId.toString()}  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                {
                    comments.length > 0 ?
                    comments.map((comment,i) =>{
                        return (
                       <>
                        <tr key={comment.id} >
                            <th scope="row" >{comment.id}</th>
                            <td >{comment.name}</td>
                            <td >{comment.email}</td>
                        </tr>
                       </>
                        
                    )}) :
                    null
                }
                </tbody>
            </table>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
            </div>
        </div>
    </div>
      )
  }
}

export default Modal
