import React, {Component} from 'react';
import {Table} from 'reactstrap';

class IdeasTable extends Component{
    render(){
        const {data} = this.props
        
        const ideas = data.map((idea,i)=>{
            return(
                <tr key={i} onClick={()=>this.props.history.push(`/ideas/${idea._id}`)}>
                    <td>{idea.topic}</td>
                    <td>{idea.author}</td>
                    <td>{idea.replies}</td>
                    <td>{idea.lastActivity}</td>
                </tr>
            )
        })

        let tableData = ideas;
        return(
            <Table hover responsive className="ideas-table">
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
