import React, {Component} from 'react';
import {Input, Button} from 'reactstrap';
import {connect} from 'react-redux';

class IdeaDesc extends Component{

    constructor(){
        super();
        this.state = {
            boxToggle: 'box-toggle',
            btnText: 'Reply',
            toggleCancel: 'cancel-toggle',
            commentBody: '',
            error:{
                message:''
            }
        }
    }

    handleChange(e){
        this.setState({
            commentBody : e.target.value
        })
    }

    async openTextBox(name,accessToken){
        if(name.length>0 && accessToken){
            if(this.state.boxToggle === 'box-toggle'){
                this.setState({
                    boxToggle: '',
                    btnText: 'Post',
                    toggleCancel: ''
                })
            }else{
                // await alert('as'); call fetch here
                this.setState({
                    boxToggle: 'box-toggle',
                    btnText: 'Reply',
                    toggleCancel: 'cancel-toggle',
                    commentBody: ''
                })

            }
        }else{
            await this.setState({
                error:{
                    message: 'Please Login to reply'
                }
            })
            alert(this.state.error.message)
        }
    }

    cancelPost(){
        if(this.state.toggleCancel === ''){
            this.setState({
                boxToggle: 'box-toggle',
                btnText: 'Reply',
                toggleCancel: 'cancel-toggle'
            })
        }else{
            this.setState({
                boxToggle: '',
                btnText: 'Post',
                toggleCancel: 'cancel-toggle'
            })

        }
    }

    render(){
        let {data,name,accessToken} = this.props
        const description = data.description.map((para,i)=>{
            return(
                <p key={i}>{para}</p>
            )
        })
        const comments = data.comments.map((comment,i)=>{
            return(
                <div key={i}>
                    <h5>{comment.username}</h5>
                    <p>{comment.body}</p>
                </div>
            )
        })
        return(
            <div>
                <div className="idea-details-parent-container">
                    <h4>{data.topic}</h4>
                    <div className="ideas-detail-container">
                        <div className="author-container">
                            <h4><b>Author</b> :</h4>
                            <h4>{data.author}</h4>
                        </div>
                        <div className="idea-description-container">
                            {description}
                            <span>{data.replies} replies</span>
                        </div>
                    </div>
                    <div className={"reply-box-container " + this.state.boxToggle} >
                        <Input type="textarea" value={this.state.commentBody} name="comment" onChange={this.handleChange.bind(this)}></Input>
                    </div>
                    <div className={"reply-btn-container"}>
                        <small onClick={()=>this.cancelPost()} className={"cancel "+ this.state.toggleCancel}>Cancel</small>
                        <Button type="button" onClick={()=>this.openTextBox(name,accessToken)} className="reply-btn" color="primary">{this.state.btnText}</Button>
                    </div>
                </div>

                <div className="comments-description">
                    <h4>Comments</h4>
                    <div className="comment-detail-container">
                        <div className="comments-container">
                            {comments}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        name: state.authReducer.name,
        accessToken: state.authReducer.accessToken
    }
}

export default connect(mapStateToProps)(IdeaDesc);