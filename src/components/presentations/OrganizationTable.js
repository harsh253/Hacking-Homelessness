import React, {Component} from 'react';
import {Table} from 'reactstrap';
import OrganizationCard from './OrganizationCard';

class OrganizationTable extends Component{
    render(){
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
                    <tr>
                    <td>Organization A</td>
                    <td>London</td>
                    <td><a href="#">www.organizationA.com</a></td>
                    <td><a href="#">Donate</a></td>
                    </tr>
                    <tr>
                    <td>Organization B</td>
                    <td>India</td>
                    <td><a href="#">www.organizationB.com</a></td>
                    <td><a href="#">Donate</a></td>
                    </tr>
                    <tr>
                    <td>Organization C</td>
                    <td>London</td>
                    <td><a href="#">www.organizationC.com</a></td>
                    <td><a href="#">Donate</a></td>
                    </tr>
                    <tr>
                    <td>Organization D</td>
                    <td>India</td>
                    <td><a href="#">www.organizationD.com</a></td>
                    <td><a href="#">Donate</a></td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default OrganizationTable;