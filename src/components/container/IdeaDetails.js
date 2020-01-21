import React, {Component} from 'react';
import Layout from '../views/Layout';
import IdeaDesc from '../presentations/IdeaDesc';
import store from '../../store/store';
import * as actions from '../../actions';
import Loader from 'react-loader-spinner'
import {connect} from 'react-redux';
import fetchApi from '../../utilities/fetchApi';

// var details = {
//     topic: "Idea 1",
//     author: "John Doe",
//     replies: 12,
//     lastActivity: "Yesterday",
//     description: [
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Ipsum dolor sit amet consectetur adipiscing elit. Nunc eget lorem dolor sed viverra ipsum. Libero enim sed faucibus turpis in eu mi bibendum. Eget nullam non nisi est sit amet facilisis. Quam nulla porttitor massa id.',
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Ipsum dolor sit amet consectetur adipiscing elit. Nunc eget lorem dolor sed viverra ipsum. Libero enim sed faucibus turpis in eu mi bibendum. Eget nullam non nisi est sit amet facilisis. Quam nulla porttitor massa id.',
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Ipsum dolor sit amet consectetur adipiscing elit. Nunc eget lorem dolor sed viverra ipsum. Libero enim sed faucibus turpis in eu mi bibendum. Eget nullam non nisi est sit amet facilisis. Quam nulla porttitor massa id.',
//     ],
//     comments: [
//         {
//             username: 'John Doe',
//             body: 'Ac orci phasellus egestas tellus rutrum. Interdum velit euismod in pellentesque massa placerat. Venenatis lectus magna fringilla urna porttitor rhoncus. Adipiscing'
//         },
//         {
//             username: 'Jane Doe',
//             body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//         }
//     ]
// }

class IdeaDetails extends Component{

    async componentDidMount(){
        const ideaId = this.props.match.params.id

        let response = await fetchApi(`/api/idea/${ideaId}`, "GET");
        if(!response.error){
            store.dispatch(actions.ideaDetailsReceived(response.data, response.data.comments, response.data.replies))
        }else{
            console.log(response.error)
        }
        
    }

    async componentWillUnmount(){
        await store.dispatch(actions.clearIdeaDetails());
    }

    render(){
        var {ideaDetails, ideaDetailsLoading} = this.props
        let content;

        if(Object.keys(ideaDetails).length && !ideaDetailsLoading){
            content = (
                <IdeaDesc data={ideaDetails}></IdeaDesc>
            )
        }
        else if(Object.keys(ideaDetails).length === 0 && !ideaDetailsLoading){
            content = (
                <p>No details found</p>
            )
        }
        else if(ideaDetailsLoading){
            content = (
                <div className="text-center loader">
                    <Loader type="Oval"
                    color="#60DDC9"/>
                </div>
            )
        }

        return(
            <div>
                <Layout></Layout>
                <div className="page-container">
                    <h3>IDEAS</h3>
                    {content}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        ideaDetails: state.ideasReducer.ideaDetails,
        ideaDetailsLoading: state.ideasReducer.ideaDetailsLoading
    }
}


export default connect(mapStateToProps)(IdeaDetails);