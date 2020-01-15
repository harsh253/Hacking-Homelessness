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
                <OrgList history={this.props.history} ></OrgList>
            </div>
        )
    }
}

export default withRouter(Organizations);