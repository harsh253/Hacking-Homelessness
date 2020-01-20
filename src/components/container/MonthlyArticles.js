import React, {Component} from 'react';
import Layout from '../views/Layout';
import {Link} from 'react-router-dom'

class MonthlyArticles extends Component{
    render(){
        return(
            <div>
                <Layout></Layout>
                <div className="page-container">
                    <h3>Articles Posted In {this.props.match.params.date}</h3>
                    <div className="article-card-container">
                        <div className="custom-article-card">
                            <h3>News About Caretakers Cottage</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ullamcorper eget nulla facilisi</p>
                            <p><Link to={`/news/:id`}>Read More</Link></p>
                        </div>
                        <div className="custom-article-card">
                            <h3>News About Caretakers Cottage</h3>
                            <p>Lorem ipsum dolor sit amet, a. Est ullamcorper eget nulla facilis</p>
                            <p><Link to={`/news/:id`}>Read More</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MonthlyArticles