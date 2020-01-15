import React, {Component} from 'react';
import Layout from './Layout';
import OrgDonations from '../container/OrgDonations';

class Donation extends Component{
    render(){
        return(
            <div>
                <Layout></Layout>
                <OrgDonations></OrgDonations>
            </div>
        )
    }
}

export default Donation;