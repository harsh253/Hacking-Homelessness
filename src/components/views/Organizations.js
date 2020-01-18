import React,{Component} from 'react';
import Layout from './Layout';
import '../../styles/organizations.css'
import OrgList from '../container/OrgList';
import {withRouter} from 'react-router-dom';
import {Jumbotron} from 'reactstrap'

class Organizations extends Component{
    render(){
        return(
            <div>
                <Layout></Layout>
                <div className="text-center custom-jumbotron">
                    <h1><b>Looking for organizations fighting against homelessness?</b></h1>
                    <h2>Then you've come to the right place</h2>
                </div>
                <OrgList history={this.props.history} ></OrgList>
            </div>
        )
    }
}

export default withRouter(Organizations);