import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint} from '@fortawesome/free-solid-svg-icons'

class OrganizationDesc extends Component{
    render(){
        const description = this.props.data.description.map((para,i)=>{
            return(
                <p key={i}>{para}</p>
            )
        })
        const twitterContent = `Hey Twitteratis. I came across this organization by the name '${this.props.data.name}' which is fighting against homelessness. For more details go to ${window.location.href}`
        return(
            <div>
                <div className="page-container">
                    <div className="share-info text-right">
                        <h6><b>Share information on</b> :</h6>
                        <FontAwesomeIcon className="custom-icon fb-icon" icon={['fab', 'facebook-f']}></FontAwesomeIcon>
                        <a href={`https://twitter.com/intent/tweet?text=${twitterContent}`}><FontAwesomeIcon className="custom-icon twitter-icon" icon={['fab', 'twitter']}></FontAwesomeIcon></a>
                        Or
                        <FontAwesomeIcon onClick={()=>window.print()}className="custom-icon print-icon" icon={faPrint}></FontAwesomeIcon>
                    </div>
                    <div className="org-details-container">
                        <h3>{this.props.data.name}</h3>
                        <div className="org-info">
                            <h6><b>Established</b> : {this.props.data.established}</h6>
                            <h6><b>Location</b> : {this.props.data.location}</h6>
                            <h6><b>Website</b> : <a target="blank" href={this.props.data.website}>{this.props.data.website}</a></h6>
                        </div>
                        <div className="org-desc">
                            <h6><b>Description</b> :</h6>
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrganizationDesc