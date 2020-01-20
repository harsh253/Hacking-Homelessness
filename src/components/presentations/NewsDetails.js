import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint} from '@fortawesome/free-solid-svg-icons'

class NewsDetails extends Component{
    render(){
        const {data} = this.props

        const paragraphs = data.content.map((para,i)=>{
            return(
                <p key={i}>{para}</p>
            )
        })

        const twitterContent = `${data.heading}` + ` ` + `${window.location.href}`

        return(
            <div className="page-container">
                <div className="news-details-parent-container">
                    <h3>{data.heading}</h3>
                    <small>{data.created}</small>
                    <div className="news-content-container">
                        {paragraphs}
                    </div>
                </div>
                <div className="share-info text-right">
                    <h6><b>Share information on</b> :</h6>
                    <FontAwesomeIcon className="custom-icon fb-icon" icon={['fab', 'facebook-f']}></FontAwesomeIcon>
                    <a href={`https://twitter.com/intent/tweet?text=${twitterContent}`}><FontAwesomeIcon className="custom-icon twitter-icon" icon={['fab', 'twitter']}></FontAwesomeIcon></a>
                    Or
                    <FontAwesomeIcon onClick={()=>window.print()}className="custom-icon print-icon" icon={faPrint}></FontAwesomeIcon>
                </div>
            </div>
        )
    }
}

export default NewsDetails;