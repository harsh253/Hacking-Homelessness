import React, {Component} from 'react';
import Layout from '../views/Layout';
import Loader from 'react-loader-spinner'
import fetchApi from '../../utilities/fetchApi';
import store from '../../store/store';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import MonthlyArticlesList from '../presentations/MonthlyArticlesList';
import months from '../../constants/months';



class MonthlyArticles extends Component{

    async componentDidMount(){
        const year = this.props.match.params.year;
        const month = this.props.match.params.month;
        let response = await fetchApi(`/api/news/${year}/${month}`, "GET")
        if(!response.error){
            store.dispatch(actions.monthlyArticlesReceived(response.data))
        }else{
            console.log(response.error)
        }
    }

    async componentWillUnmount(){
        await store.dispatch(actions.clearMonthlyArticles())
    }

    render(){
        
        const {monthlyArticles, monthlyArticlesLoading, match} = this.props;
        let content;

        const allArticles = monthlyArticles.map((article,i)=>{
            return(
                <MonthlyArticlesList key={i} data ={article}></MonthlyArticlesList>
            )
        })

        if(monthlyArticles.length>0 && !monthlyArticlesLoading){
            content = (
                allArticles
            )
        }
        else if(monthlyArticles.length===0 && !monthlyArticlesLoading){
            content=(
                <h5 style={{marginTop:'25px'}}>No article were posted in this month</h5>
            )
        }
        else if(monthlyArticlesLoading){
            content = (
                <div className="text-center loader">
                    <Loader type="Oval"
                    color="#60DDC9"/>
                </div>
            )
        }

        const currMonth = months[match.params.month]


        return(
            <div>
                <Layout></Layout>
                <div className="page-container">
                    <h3>Articles Posted In {currMonth} {match.params.year}</h3>
                    {content}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        monthlyArticles: state.newsReducer.monthlyArticles,
        monthlyArticlesLoading: state.newsReducer.monthlyArticlesLoading
    }
}

export default connect(mapStateToProps)(MonthlyArticles)