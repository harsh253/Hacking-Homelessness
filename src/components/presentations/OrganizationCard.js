import React, {Component} from 'react';
import '../../styles/organizationCard.css'

class OrganizationCard extends Component{
    render(){
        return(
            <div onClick={()=>window.location.assign('/organization/:id')} className="custom-card">
                <h3>{this.props.name}</h3>
                <p className="card-text">{this.props.desc}</p>
                <div className="footer">
                    <h6><b>Established</b> : {this.props.estd}</h6>
                    <h6><b>Location</b>: {this.props.location}</h6>
                </div>
            </div>
        )
    }

}

export default OrganizationCard