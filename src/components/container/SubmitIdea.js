import React, {Component} from 'react';
import Layout from '../views/Layout';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux';



class SubmitIdea extends Component{
    constructor(props){
        super(props);
        this.state = {
            formDetails:{
                topic: '',
                body: ''
            }
        }

    }

    handleChange(e){
        var details = Object.assign({}, this.state.formDetails);
        details[e.target.name] = e.target.value;
        this.setState({
            formDetails:details
        })
    }

    submitIdea(){
        this.props.history.push('/ideas')
    }

    render(){
        const {name, accessToken} = this.props
        if(name.length>0 && accessToken){
            return(
                <div>
                    <Layout></Layout>
                    <div className="page-container">
                        <h3>Submit your own Idea</h3>
                        <div className="idea-form-container">
                            <Form>
                                <FormGroup>
                                    <Label for="author"><b>Author</b></Label>
                                    <Input disabled value={name} type="text" name="author" id="author"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="topic"><b>Topic</b></Label>
                                    <Input type="text" name="topic" value={this.state.topic} onChange={this.handleChange.bind(this)} id="topic" placeholder="Idea Topic" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="body"><b>Idea</b></Label>
                                    <Input style={{height: '150px'}} value={this.state.ideaBody} onChange={this.handleChange.bind(this)} type="textarea" name="body" id="body" />
                                </FormGroup>
                                <div className="button-container">
                                    <Button onClick={this.submitIdea.bind(this)}type="button" color="primary">Submit</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <Layout></Layout>
                    <div className="page-container text-center">
                        <h1>You need to login to continue</h1>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state){
    return{
        name: state.authReducer.name,
        accessToken: state.authReducer.accessToken
    }
}

export default connect(mapStateToProps)(SubmitIdea);