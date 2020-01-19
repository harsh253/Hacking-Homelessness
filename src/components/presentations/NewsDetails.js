import React, {Component} from 'react';

class NewsDetails extends Component{
    render(){
        const {data} = this.props

        const paragraphs = data.content.map((para,i)=>{
            return(
                <p key={i}>{para}</p>
            )
        })

        return(
            <div className="news-details-parent-container">
                <h3>{data.heading}</h3>
                <small>{data.created}</small>
                <div className="news-content-container">
                    {paragraphs}
                </div>
            </div>
        )
    }
}

export default NewsDetails;