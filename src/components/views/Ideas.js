import React, {Component} from 'react';
import {Button} from 'reactstrap';
import Layout from './Layout';
import IdeasContainer from '../container/IdeasContainer';
import {withRouter} from 'react-router-dom'

class Ideas extends Component{
    render(){
        return(
            <div>
                <Layout></Layout>
                <div className="page-container">
                    <h3>IDEAS</h3>
                    <div className="ideas-container">
                        <Button type="button" className="idea-share-btn" color="primary">Share your own idea</Button>
                    </div>
                    <IdeasContainer history={this.props.history}></IdeasContainer>
                </div>
            </div>
        )
    }
}

export default withRouter(Ideas)