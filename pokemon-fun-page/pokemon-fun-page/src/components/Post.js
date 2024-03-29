import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../actionCreators/postActions';

class Post extends Component{
    /*state = {
        post: null
    }
    componentDidMount(){
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
         .then(res => {
             this.setState({
                post: res.data
             })
         })
    }*/
    handleClick = (e) => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/')
    }
    render(){

        const postList = this.props.post ? (
            <div className="post">
                <p className="center">{this.props.post.title}</p>
                <p className="center">{this.props.post.body}</p>
                <button className="grey-text" onClick={this.handleClick}>DELETE POST</button>
            </div>
        ) : (
            <div className="center">Loading ...</div>
        )
        return(
            <div className="container">
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)