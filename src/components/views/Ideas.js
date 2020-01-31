import React, {Component} from 'react';
import {Button} from 'reactstrap';
import Layout from './Layout';
import IdeasContainer from '../container/IdeasContainer';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class Ideas extends Component{

    constructor(props){
        super(props);
        this.state={
            error:{
                message: ''
            }
        }
    }


    async submitIdea(){
        const {name, accessToken} = this.props;
        console.log(name)
        if(name && accessToken)
            this.props.history.push('/submit-idea')
        else{
            await this.setState({
                error:{
                    message: 'Please Login to Continue'
                }
            })
            alert(this.state.error.message)
        }
    }

    render(){
        return(
            <div>
                <Layout></Layout>
                <div className="page-container">
                    <h3>IDEAS</h3>
                    <div className="ideas-container">
                        <Button type="button" onClick={this.submitIdea.bind(this)} className="idea-share-btn">Share your own idea</Button>
                    </div>
                    <IdeasContainer history={this.props.history}></IdeasContainer>
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

export default connect(mapStateToProps)(withRouter(Ideas));