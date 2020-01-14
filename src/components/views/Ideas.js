import React, {Component} from 'react';
import {Table, Button} from 'reactstrap';
import Layout from './Layout';

class Ideas extends Component{
    render(){
        return(
            <div>
                <Layout></Layout>
                <div className="page-container">
                    <h3>IDEAS</h3>
                    <div className="ideas-container">
                        <Button type="button" className="idea-share-btn" color="primary">Share your own idea</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ideas