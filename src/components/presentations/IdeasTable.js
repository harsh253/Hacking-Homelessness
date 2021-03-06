import React, {Component} from 'react';
import {Table} from 'reactstrap';

class IdeasTable extends Component{
    render(){
        const {data, lastActivity} = this.props
        // console.log(lastActivity)
        
        const ideas = data.map((idea,i)=>{
            return(
                <tr key={i} onClick={()=>this.props.history.push(`/ideas/${idea._id}`)}>
                    <td>{idea.topic}</td>
                    <td>{idea.author}</td>
                    <td>{idea.replies}</td>
                    {idea.lastActivity? <td>{lastActivity[i]}</td>: <td>Few Seconds Ago</td> }
                </tr>
            )
        })

        let tableData = ideas;
        return(
            <Table borderless responsive className="ideas-table">
                <thead>
                    <tr>
                    <th>Idea</th>
                    <th>Started By</th>
                    <th>Replies</th>
                    <th>Last Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </Table>
        )
    }
}

export default IdeasTable;
