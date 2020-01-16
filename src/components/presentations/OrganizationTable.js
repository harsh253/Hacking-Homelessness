import React, {Component} from 'react';
import {Table} from 'reactstrap';
import OrganizationCard from './OrganizationCard';

class OrganizationTable extends Component{
    render(){
        const {data} = this.props
        
        const orgs = data.map((org,i)=>{
            return(
                <tr key={i}>
                    <td>{org.name}</td>
                    <td>{org.location}</td>
                    <td><a href="#">{org.website}</a></td>
                    <td><a href={org.donation}>Donate</a></td>
                </tr>
            )
        })

        let tableData = orgs;



        return(
            <Table className="org-table" hover responsive>
                <thead>
                    <tr>
                    <th>Organization</th>
                    <th>Location</th>
                    <th>Website</th>
                    <th>Donation Page</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </Table>
        )
    }
}

export default OrganizationTable;