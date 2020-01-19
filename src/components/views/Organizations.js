import React,{Component} from 'react';
import Layout from './Layout';
import '../../styles/organizations.css'
import OrgList from '../container/OrgList';
import {withRouter} from 'react-router-dom';

class Organizations extends Component{
    render(){
        return(
            <div>
                <Layout></Layout>
                <div className="text-center custom-jumbotron">
                    <h1><b>Looking for <span id="organizations">organizations</span> fighting against homelessness?</b></h1>
                    <h2>Then you've come to the <span id="right-place">right place</span></h2>
                </div>
                <OrgList history={this.props.history} ></OrgList>
            </div>
        )
    }
}

export default withRouter(Organizations);