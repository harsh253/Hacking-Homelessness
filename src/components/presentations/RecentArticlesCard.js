import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class RecentArticlesCard extends Component{
    render(){
        const {data} = this.props;
        

        const listOfArticles = data.map((article,i)=>{
            return(
                <li key={i}><Link className="news-link" to={`/news/${article._id}`}>{article.heading}</Link></li>
            )
        })

        return(
            <div className="custom-news-card">
                <h4><b>Most Recent 20 Articles</b></h4>
                <ul>
                    {listOfArticles}
                </ul>
            </div>
        )
    }
}

export default RecentArticlesCard;