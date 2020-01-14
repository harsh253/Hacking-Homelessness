import React, {Component} from 'react';
import Layout from './Layout';
import { Button,FormGroup, Input, Table } from 'reactstrap';
import OrganizationTable from '../presentations/OrganizationTable';

class Donation extends Component{
    render(){
        return(
            <div>
                <Layout></Layout>
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
                    <OrganizationTable></OrganizationTable>
                </div>
            </div>
        )
    }
}

export default Donation;