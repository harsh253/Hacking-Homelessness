import React, {Component} from 'react';
import {FormGroup, Button, Input} from 'reactstrap';
import Loader from 'react-loader-spinner'
import {connect} from 'react-redux';
import store from '../../store/store';
import * as actions from '../../actions';
import OrganizationTable from '../presentations/OrganizationTable';
import fetchApi from '../../utilities/fetchApi';

// var organizations = [
//     {
//         name: 'Organization A',
//         description: 'Lorem olor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
//         established: 2005,
//         location: 'London',
//         website: 'www.org.com',
//         donation: 'www.org.com/donate'
//     },
//     {
//         name: 'Organization B',
//         description: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
//         established: 2015,
//         location: 'India',
//         website: 'www.org.com',
//         donation: 'www.org.com/donate'
//     },
//     {
//         name: 'Organization c',
//         description: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
//         established: 2017,
//         location: 'India',
//         website: 'www.org.com',
//         donation: 'www.org.com/donate'
//     },
//     {
//         name: 'Organization c',
//         description: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
//         established: 2017,
//         location: 'India',
//         website: 'www.org.com',
//         donation: 'www.org.com/donate'
//     },
//     {
//         name: 'Organization c',
//         description: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
//         established: 2017,
//         location: 'India',
//         website: 'www.org.com',
//         donation: 'www.org.com/donate'
//     },
//     {
//         name: 'Organization c',
//         description: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
//         established: 2017,
//         location: 'India',
//         website: 'www.org.com',
//         donation: 'www.org.com/donate'
//     }

// ]

class OrgDonations extends Component{

    constructor(props){
        super(props);
        this.state={
            formDetails:{
                org: '',
                select: 'All Countries'
            }
        }
    }

    // async handleChange(orgs,event){
    //     var details = Object.assign({}, this.state.formDetails)
    //     details[event.target.name] = event.target.value.trim()
    //     await this.setState({
    //         formDetails: details
    //     })

    //     //search(orgs,event,state)
    // }

    async searchOrg(orgs,event){
        var details = Object.assign({}, this.state.formDetails)
        details[event.target.name] = event.target.value.trim()
        await this.setState({
            formDetails: details
        })
        let filteredOrgs = orgs;
        let searching = true
        var self = this
        if(this.state.formDetails.org === '' && this.state.formDetails.select === 'All Countries'){
            searching = false
        }else if(this.state.formDetails.select!=='All Countries' && this.state.formDetails.org === '' ){
            filteredOrgs = orgs.filter(function(org){
                return org.location.toLowerCase().search(
                    self.state.formDetails.select.toLowerCase()) !== -1;
                })
        }else if(this.state.formDetails.org !== '' && this.state.formDetails.select === 'All Countries'){
            filteredOrgs = orgs.filter(function(org){
                return org.name.toLowerCase().search(
                    self.state.formDetails.org.toLowerCase()) !== -1;
                })
        }else{
            filteredOrgs = orgs.filter(function(org){
                return org.name.toLowerCase().search(
                    self.state.formDetails.org.toLowerCase()) !== -1;
                }).filter(function(org){
                return org.location.toLowerCase().search(
                    self.state.formDetails.select.toLowerCase()) !== -1;
                })
            }
        store.dispatch(actions.filterDonationOrgs(filteredOrgs,searching))
    }

    async componentDidMount(){
        let response = await fetchApi('/api/orgs', "GET");
        if(!response.error){
            await store.dispatch(actions.donationOrgsReceived(response.data))
        }else{
            console.log(response.error)
        }
        
    }

    render(){
        var {donationOrgs, donationOrgsLoading, filteredOrgs, searching} = this.props
        let content;

        if(filteredOrgs.length>0 && !donationOrgsLoading && donationOrgs.length>0 && searching){
            content = (
                <div>
                    <OrganizationTable data={filteredOrgs}></OrganizationTable>
                </div>
            )
        }
        else if(donationOrgs.length>0 && !donationOrgsLoading && !searching){
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
        }else if(searching && filteredOrgs.length===0 && !donationOrgsLoading){
            content = (
                <div>
                    No such organization found
                </div>
            )

        }else if(donationOrgsLoading){
            content = (
                <div className="text-center loader">
                    <Loader type="Oval"
                    color="#60DDC9"/>
                </div>
            )
        }
        return(
            <div className="page-container">
                <h3>Donate To An Organization</h3>
                <div className="form-container">
                    <FormGroup className="input-field">
                        <Input type="text" name="org" onChange={(event) => this.searchOrg(donationOrgs, event)}className="input-field-style" placeholder="Search for an organization"></Input>
                    </FormGroup>
                    <span className="in">IN</span>
                    <FormGroup className="input-field">
                        <Input type="select" onChange={(event) => this.searchOrg(donationOrgs, event)} name="select" className="input-field-style">
                        <option>All Countries</option>
                        <option>United Kingdom</option>
                        <option>Belgium</option>
                        <option>USA</option>
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
        donationOrgsLoading: state.donationReducer.donationOrgsLoading,
        filteredOrgs: state.donationReducer.filteredOrgs,
        searching: state.donationReducer.searching
    }
}

export default connect(mapStateToProps)(OrgDonations);