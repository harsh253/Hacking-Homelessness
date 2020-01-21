import React, {Component} from 'react';
import {Input, Button, Form,Modal, 
    ModalHeader,
    ModalBody,
    ModalFooter,} from 'reactstrap';
import {connect} from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {GoogleLogin} from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fetchApi from '../../utilities/fetchApi';
import store from '../../store/store';
import * as actions from '../../actions';

class IdeaDesc extends Component{

    constructor(){
        super();
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            formDetails:{
                reply: '',
                username: localStorage.getItem('name'),
                date_now: new Date()
            },
            error:{
                message:''
            },
            modal:false,
        }
    }

    toggleModal(){
        this.setState({
          modal: !this.state.modal,
        })
    }

    handleChange(e){
        this.setState({
            formDetails:{
                reply : e.target.value,
                username: localStorage.getItem('name'),
                date_now: new Date()
            }
        })
    }

     submitReply(id){
        return async e=>{
            e.preventDefault()
            if(!this.state.formDetails.reply.trim()){
                this.setState({
                    error:{
                        message: 'Reply can\'t\ be empty'
                    }
                })
                // window.location.reload()
            }else{
                let response = await fetchApi(`/api/idea/reply/${id}`,"POST", this.state.formDetails, localStorage.getItem('accessToken'))
                if(!response.error){
                    store.dispatch(actions.addComment(this.state.formDetails.reply,this.state.formDetails.username))
                    this.setState({
                        formDetails:{
                            reply: '',
                            username: localStorage.getItem('name'),
                            date_now: new Date()
                        }
                    })
                }

            }
        }
    }

    render(){
        const responseFacebook = (response) => {
            console.log(response);
              localStorage.setItem('accessToken', response.accessToken)
              localStorage.setItem('name', response.name)
              window.location.reload()
    
          }
      
          const responseGoogle = (response) => {
            console.log(response);
            localStorage.setItem('accessToken', response.accessToken)
            localStorage.setItem('name', response.profileObj.name)
            window.location.reload()
          }  
        let {data,name,accessToken,comments, replies} = this.props
        const description = data.description.map((para,i)=>{
            return(
                <p key={i}>{para}</p>
            )
        })
        const commentsList = comments.map((comment,i)=>{
            return(
                <div key={i}>
                    <h5>{comment.username}</h5>
                    <p>{comment.reply}</p>
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
                            <span>{replies} replies</span>
                        </div>
                    </div>
                    {accessToken && name ? 
                        <Form onSubmit={this.submitReply(data._id)}>
                            <Input type="textarea" className={"reply-box-container reply-box"} required value={this.state.formDetails.reply} name="comment" onChange={this.handleChange.bind(this)}></Input>
                            <Button type="submit" id="reply-btn" className="reply-btn" color="primary">Reply As {name}</Button>
                            <p>{this.state.error.message}</p>
                        </Form>
                            :
                        <Form> 
                            <Button type="button" onClick={()=>this.toggleModal()} className="reply-btn">Sign in to reply</Button>
                        </Form>
                    }
                    
                </div>

                <div className="comments-description">
                    <h4>Comments</h4>
                    <div className="comment-detail-container">
                        <div className="comments-container">
                            {commentsList}
                        </div>
                    </div>
                </div>
                <Modal centered isOpen={this.state.modal} toggle={this.toggleModal} className="text-center">
            <ModalHeader toggle={this.toggleModal}>Log in</ModalHeader>
            <ModalBody>
              Sign in using
              <div className="login-services">
                
                <FacebookLogin 
                  appId="1043474982652148" 
                  fields="name,email,picture"
                  callback={responseFacebook}
                  isMobile={false}
                  render={renderProps => (
                    <Button onClick={renderProps.onClick} className="fb-login-btn">
                      <FontAwesomeIcon className="fb-login-icon" icon={['fab', 'facebook-f']}></FontAwesomeIcon>
                      Facebook
                    </Button>
                    
                  )}
                />
                <GoogleLogin
                  clientId="491014928615-punuriroth7d8l3g5r8d0c83gu2keatf.apps.googleusercontent.com"
                  buttonText="LOGIN WITH GOOGLE"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  render={renderProps => (
                    <Button onClick={renderProps.onClick} disabled={renderProps.disabled} className="google-login-btn">
                      <FontAwesomeIcon className="google-login-icon" icon={['fab', 'google']}></FontAwesomeIcon>
                      Google
                    </Button>
                  )}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        name: state.authReducer.name,
        accessToken: state.authReducer.accessToken,
        comments: state.ideasReducer.comments,
        replies: state.ideasReducer.replies
    }
}

export default connect(mapStateToProps)(IdeaDesc);