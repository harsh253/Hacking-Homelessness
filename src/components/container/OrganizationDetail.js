import React, {Component} from 'react';
import Layout from '../views/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint, faWindowMinimize } from '@fortawesome/free-solid-svg-icons'


class OrganizationDetail extends Component{
    render(){
        return(
            <div>
                <Layout></Layout>
                <div className="page-container">
                    <div className="org-details-container">
                        <h3>Organization A</h3>
                        <div className="org-info">
                            <h6><b>Established</b> : 2005</h6>
                            <h6><b>Location</b> : London</h6>
                            <h6><b>Website</b> : <a href="#">www.org.com</a></h6>
                        </div>
                        <div className="org-desc">
                            <h6><b>Description</b> :</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Ipsum dolor sit amet consectetur adipiscing elit. Nunc eget lorem dolor sed viverra ipsum. Libero enim sed faucibus turpis in eu mi bibendum. Elit scelerisque mauris pellentesque pulvinar. Nisi vitae suscipit tellus mauris a diam. Id consectetur purus ut faucibus pulvinar elementum integer enim. Enim nulla aliquet porttitor lacus luctus. Ut consequat semper viverra nam libero justo laoreet sit amet. Ultricies leo integer malesuada nunc vel risus. Turpis cursus in hac habitasse platea dictumst. Ultrices sagittis orci a scelerisque. Quam pellentesque nec nam aliquam sem et tortor consequat id. Tincidunt eget nullam non nisi est sit amet facilisis.
                                Euismod in pellentesque massa placerat duis ultricies lacus sed. Non pulvinar neque laoreet suspendisse interdum. Et netus et malesuada fames. Velit euismod in pellentesque massa placerat duis ultricies. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Sed nisi lacus sed viverra tellus in. Sed egestas egestas fringilla phasellus faucibus. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Praesent tristique magna sit amet purus. Nibh ipsum consequat nisl vel pretium lectus. Eget magna fermentum iaculis eu non diam phasellus vestibulum.Urna id volutpat lacus laoreet non curabitur gravida arcu. Faucibus a pellentesque sit amet porttitor eget. Fermentum dui faucibus in ornare quam. Ultricies tristique nulla aliquet enim tortor at auctor urna. At auctor urna nunc id cursus metus aliquam eleifend mi. Magna ac placerat vestibulum lectus. Tincidunt tortor aliquam nulla facilisi cras. Fermentum dui faucibus in ornare quam. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Luctus accumsan tortor posuere ac ut. Posuere morbi leo urna molestie at elementum eu facilisis sed. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Iaculis at erat pellentesque adipiscing commodo elit. Faucibus et molestie ac feugiat. Leo vel orci porta non pulvinar neque laoreet. Risus ultricies tristique nulla aliquet enim tortor.
                                Nulla facilisi nullam vehicula ipsum a arcu cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Dui id ornare arcu odio ut sem nulla. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Imperdiet dui accumsan sit amet nulla facilisi morbi. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Ut pharetra sit amet aliquam id. Eget nullam non nisi est sit amet facilisis. Quam nulla porttitor massa id.
                            </p>
                        </div>
                    </div>
                    <div className="share-info text-right">
                        <h6><b>Share information on</b> :</h6>
                        <FontAwesomeIcon className="custom-icon fb-icon" icon={['fab', 'facebook-f']}></FontAwesomeIcon>
                        <a href="https://twitter.com/intent/tweet?text=Hello%20world"><FontAwesomeIcon className="custom-icon twitter-icon" icon={['fab', 'twitter']}></FontAwesomeIcon></a>
                        Or
                        <FontAwesomeIcon onClick={()=>window.print()}className="custom-icon print-icon" icon={faPrint}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrganizationDetail;