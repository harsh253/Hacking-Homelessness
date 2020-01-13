import React,{Component} from 'react';
import Layout from '../views/Layout';
import { Button,FormGroup, Input } from 'reactstrap';
import '../../styles/organizations.css'
import OrganizationCard from '../presentations/OrganizationCard';
import Loader from 'react-loader-spinner'
import {connect} from 'react-redux';
import store from '../../store/store';
import * as actions from '../../actions';

var organizations = [
    {
        name: 'Organization A',
        description: 'Lorem olor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
        established: 2005,
        location: 'London'
    },
    {
        name: 'Organization B',
        description: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
        established: 2015,
        location: 'India'
    },
    {
        name: 'Organization c',
        description: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
        established: 2017,
        location: 'India'
    },
    {
        name: 'Organization c',
        description: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
        established: 2017,
        location: 'India'
    },
    {
        name: 'Organization c',
        description: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
        established: 2017,
        location: 'India'
    },
    {
        name: 'Organization c',
        description: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
        established: 2017,
        location: 'India'
    }

]

class Organizations extends Component{

    componentDidMount(){
        store.dispatch(actions.orgsReceived(organizations))
    }

    render(){
        var {orgsLoading, orgs} = this.props;
        const allOrgs = orgs.map((org,i)=>{
            return(
                <OrganizationCard key={i} name={org.name} desc={org.description} estd={org.established} location={org.location}></OrganizationCard>
            )
        })

        let content;
        if(orgs.length>0 && !orgsLoading){
            content = (
                <div className="card-container">
                    {allOrgs}
                </div>
            )
        }else if(orgs.length===0 && !orgsLoading){
            content = (
                <div>
                    No org listed yet
                </div>
            )
        }else if(orgsLoading){
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
                <div className="page-container">
                    <h3>Organizations</h3>
                    <div className="form-container">
                        <FormGroup className="input-field">
                            <Input type="text" className="input-field-style" placeholder="Search for an organization"></Input>
                        </FormGroup>
                        <span className="in">IN</span>
                        <FormGroup className="input-field">
                            <Input type="select" name="select" className="input-field-style">
                            <option>All Countries</option>
                            <option>London</option>
                            <option>India</option>
                            </Input>
                        </FormGroup>
                        <Button type="button" className="search-btn" color="primary">Search</Button>
                    </div>
                    {content}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        orgsLoading: state.orgReducer.allOrgsLoading,
        orgs: state.orgReducer.orgs
    }
}

export default connect(mapStateToProps)(Organizations);