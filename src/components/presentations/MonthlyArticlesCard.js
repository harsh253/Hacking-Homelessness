import React, {Component} from 'react';
import {FormGroup, Input} from 'reactstrap';
import {Link} from 'react-router-dom'


    const month = ["January", "February", "March" , "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const date = new Date();
    var currMonth = date.getMonth();
    var currYear = date.getFullYear();

    const today = month[currMonth] + " "+ currYear.toString();
    const listOfMonths = [today]

    for(var i=month.length; i>1;i--){
        if(currMonth===0){
            currYear = currYear-1;
            currMonth = month.length-1
        }else{
            currMonth = currMonth-1;
        }
        listOfMonths.push(month[currMonth] + " " + currYear.toString())
    }



    

class MonthlyArticlesCard extends Component{
    render(){
        
        const monthlyList = listOfMonths.map((date,i)=>{
            return(
                <li key={i}><Link className="news-link" to={`/monthly/${date}`} >{date}</Link></li>
            )
        })

        
        return(
            <div className="custom-news-card">
                <h4><b>Articles By Month</b></h4>
                <ul>
                    {monthlyList}
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
        )
    }
}

export default MonthlyArticlesCard;