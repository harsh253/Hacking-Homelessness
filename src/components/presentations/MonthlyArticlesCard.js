import React, {Component} from 'react';
import {FormGroup, Input, Form} from 'reactstrap';
import {Link} from 'react-router-dom'
import months from '../../constants/months';


    const date = new Date();
    var currMonth = date.getMonth();
    var currYear = date.getFullYear();
    const listOfDate = []
    listOfDate.push([currYear,currMonth])

    for(var i=months.length; i>1;i--){
        if(currMonth===0){
            currYear = currYear-1;
            currMonth = months.length-1
        }else{
            currMonth = currMonth-1;
        }
        listOfDate.push([currYear,currMonth])
    }
    

class MonthlyArticlesCard extends Component{

    handleChange(e){
        e.preventDefault()
        this.props.history.push(`/monthly/${e.target.value}`);
    }

    render(){
        const monthlyList = listOfDate.map((date,i,listOfDate)=>{
            const currMonth = months[listOfDate[i][1]] 
            return(
                <li key={i}><Link className="news-link" to={`/monthly/${listOfDate[i][0]}/${listOfDate[i][1]}`}>{currMonth} {listOfDate[i][0]}</Link></li>
            )
        })

        
        return(
            <div className="custom-news-card">
                <h4><b>Articles By Month</b></h4>
                <ul>
                    {monthlyList}
                </ul>
                <h4><b>All Older Posts</b></h4>
                <Form>
                    <FormGroup>
                        <Input type="select" onChange={this.handleChange.bind(this)} name="select" className="input-field-style">
                        <option disabled selected>Select a month</option>
                        <option value={`2019/0`}>January 2019</option>
                        <option value={`2018/11`}>December 2018</option>
                        <option value={`2018/10`}>November 2018</option>
                        </Input>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default MonthlyArticlesCard;