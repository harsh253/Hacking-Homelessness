import React, {Component} from 'react';
import Layout from '../views/Layout';
import Loader from 'react-loader-spinner'
import {connect} from 'react-redux';
import OrganizationDesc from '../presentations/OrganizationDesc';
import store from '../../store/store';
import * as actions from '../../actions';
import fetchApi from '../../utilities/fetchApi';

class OrganizationDetail extends Component{

    async componentDidMount(){
        const orgId = this.props.match.params.id
        let response = await fetchApi(`/api/orgs/${orgId}`, "GET");
        if(!response.error){
            console.log(response.data)
            store.dispatch(actions.orgDetailsReceived(response.data))
        }else{
            console.log(response.error)
        }
    }

    async componentWillUnmount(){
        await store.dispatch(actions.clearOrgDetails());
    }

    render(){
        var {organizationDetails, orgDetailsLoading} = this.props

        let content;
        if(Object.keys(organizationDetails).length && !orgDetailsLoading){
            content = (
                <div>
                    <OrganizationDesc data={organizationDetails}></OrganizationDesc>
                </div>
            )
        }else if(Object.keys(organizationDetails).length === 0 && !orgDetailsLoading){
            content = (
                <div>
                    No description found
                </div>
            )
        }else if(orgDetailsLoading){
            content = (
                <div className="text-center loader">
                    <Loader type="Oval"
                    color="#007bff"/>
                </div>
            )
        }


        return(
            <div>
                <Layout></Layout>
                {content}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        organizationDetails: state.orgReducer.orgDetails,
        orgDetailsLoading: state.orgReducer.orgDetailsLoading
    }
}

export default connect(mapStateToProps)(OrganizationDetail);