import React, {Component} from 'react';
import {Button} from 'reactstrap';
import Layout from './Layout';
import NewsContainer from '../container/NewsContainer';
import {withRouter} from 'react-router-dom'

class News extends Component{
    render(){
        return(
            <div>
                <Layout></Layout>
                <div className="page-container">
                    <h3>News Articles</h3>
                    <div>
                        <NewsContainer history={this.props.history}></NewsContainer>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default withRouter(News)