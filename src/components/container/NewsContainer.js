import React, {Component} from 'react';
import {Input, FormGroup} from 'reactstrap';


class NewsContainer extends Component{
    render(){
        return(
            <div className="news-container">
                <div className="custom-news-card">
                    <h4><b>Most Recent 20 Articles</b></h4>
                    <ul>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                        <li><a>News about organization A</a></li>
                    </ul>
                </div>
                <div className="custom-news-card">
                    <h4><b>Articles By Month</b></h4>
                    <ul>
                        <li><a>January 2020</a></li>
                        <li><a>December 2019</a></li>
                        <li><a>November 2019</a></li>
                        <li><a>October 2019</a></li>
                        <li><a>September 2019</a></li>
                        <li><a>August 2019</a></li>
                        <li><a>July 2019</a></li>
                        <li><a>June 2019</a></li>
                        <li><a>May 2019</a></li>
                        <li><a>April 2019</a></li>
                        <li><a>March 2019</a></li>
                        <li><a>February 2019</a></li>
                    </ul>
                    <h4><b>All Older Posts</b></h4>
                        <FormGroup>
                            <Input type="select" name="select" className="input-field-style">
                            <option>January 2019</option>
                            <option>December 2018</option>
                            <option>November 2018</option>
                            </Input>
                        </FormGroup>
                </div>
            </div>
        )
    }
}

export default NewsContainer