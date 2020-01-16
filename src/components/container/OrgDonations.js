import React, {Component} from 'react';
import {FormGroup, Button, Input} from 'reactstrap';
import Loader from 'react-loader-spinner'
import {connect} from 'react-redux';
import store from '../../store/store';
import * as actions from '../../actions';
import OrganizationTable from '../presentations/OrganizationTable';

var organizations = [
    {
        name: 'Organization A',
        description: 'Lorem olor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
        established: 2005,
        location: 'London',
        website: 'www.org.com',
        donation: 'www.org.com/donate'
    },
    {
        name: 'Organization B',
        description: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
        established: 2015,
        location: 'India',
        website: 'www.org.com',
        donation: 'www.org.com/donate'
    },
    {
        name: 'Organization c',
        description: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
        established: 2017,
        location: 'India',
        website: 'www.org.com',
        donation: 'www.org.com/donate'
    },
    {
        name: 'Organization c',
        description: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
        established: 2017,
        location: 'India',
        website: 'www.org.com',
        donation: 'www.org.com/donate'
    },
    {
        name: 'Organization c',
        description: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
        established: 2017,
        location: 'India',
        website: 'www.org.com',
        donation: 'www.org.com/donate'
    },
    {
        name: 'Organization c',
        description: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
        established: 2017,
        location: 'India',
        website: 'www.org.com',
        donation: 'www.org.com/donate'
    }

]

class OrgDonations extends Component{

    async componentDidMount(){
        await store.dispatch(actions.donationOrgsReceived(organizations))
    }

    render(){
        var {donationOrgs, donationOrgsLoading} = this.props
        let content;

        if(donationOrgs.length>0 && !donationOrgsLoading){
            content = (
                <div>
                    <OrganizationTable data={donationOrgs}></OrganizationTable>
                </div>
            )
        }else if(donationOrgs.length ===0 && !donationOrgsLoading){
            content = (
                <div>
                    No orgs accepting donation
                </div>
            )
        }else if(donationOrgsLoading){
            content = (
                <div className="text-center loader">
                    <Loader type="Oval"
                    color="#007bff"/>
                </div>
            )
        }
        return(
            <div className="page-container">
                <h3>Donate To An Organization</h3>
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
        )
    }
}

function mapStateToProps(state){
    return{
        donationOrgs: state.donationReducer.donationOrgs,
        donationOrgsLoading: state.donationReducer.donationOrgsLoading
    }
}

export default connect(mapStateToProps)(OrgDonations);