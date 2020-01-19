import React, {Component} from 'react';
import Layout from '../views/Layout';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from 'react-redux';
import fetchApi from '../../utilities/fetchApi';



class SubmitIdea extends Component{
    constructor(props){
        super(props);
        this.state = {
            formDetails:{
                topic: '',
                author: this.props.name,
                description: []
            },
            
        }

    }

    async handleChange(e){
        var details = Object.assign({}, this.state.formDetails);
        if(e.target.name === 'description'){
            var text = document.getElementById('description').value
            var arrayOfText = text.split('\n')
            console.log(arrayOfText)
            details.description = arrayOfText
        }else{
            details[e.target.name] = e.target.value;
        }
        await this.setState({
            formDetails:details,
        })
    }

    async submitIdea(e){
        e.preventDefault()
        await fetchApi('/api/submitIdea',"POST", this.state.formDetails, localStorage.getItem('accessToken'))
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
                            <Form onSubmit={this.submitIdea.bind(this)}>
                                <FormGroup>
                                    <Label for="author"><b>Author</b></Label>
                                    <Input disabled value={name} type="text" name="author" id="author"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="topic"><b>Topic</b></Label>
                                    <Input type="text" name="topic" required value={this.state.formDetails.topic} onChange={this.handleChange.bind(this)} id="topic" placeholder="Idea Topic" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="description"><b>Idea</b></Label>
                                    <Input style={{height: '150px'}} required onChange={this.handleChange.bind(this)} type="textarea" name="description" id="description" />
                                </FormGroup>
                                <div className="button-container">
                                    <Button type="submit" color="primary">Submit</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            )
        }else{
            console.log(accessToken)
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