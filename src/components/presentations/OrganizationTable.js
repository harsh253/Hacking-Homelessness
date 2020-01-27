import React, {Component} from 'react';
import {Table} from 'reactstrap';

class OrganizationTable extends Component{
    render(){
        const {data} = this.props
        
        const orgs = data.map((org,i)=>{
            return(
                <tr key={i}>
                    <td>{org.name}</td>
                    <td>{org.location}</td>
                    <td><a target="blank" href={org.website}>{org.website}</a></td>
                    <td><a target="blank" href={org.donation}>Donate</a></td>
                </tr>
            )
        })

        let tableData = orgs;



        return(
            <Table className="org-table" borderless responsive>
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