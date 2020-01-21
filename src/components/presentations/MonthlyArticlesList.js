import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class MonthlyArticlesList extends Component{
    render(){
        const {data} = this.props
        return(
            <div className="article-card-container">
                <div className="custom-article-card">
                    <h3>{data.heading}</h3>
                    <p>{data.teaser}</p>
                    <p><Link to={`/news/${data._id}`}>Read More</Link></p>
                </div>
            </div>
        )
    }
}

export default MonthlyArticlesList;