import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner'
import store from '../../store/store';
import * as actions from '../../actions'
import RecentArticlesCard from '../presentations/RecentArticlesCard'
import MonthlyArticlesCard from '../presentations/MonthlyArticlesCard'

const allArticles = [
    {
        heading: 'News About Caretakers Cottage',
        date:'Jan 1 2020',
        month: 'January',
        year: '2020',
        content: [
            '',
            '',
            ''
        ],
        _id:'1'
    },
    {
        heading: 'Home For All organization setting records',
        date:'Jan 3 2020',
        month: 'January',
        year: '2020',
        content: [
            '',
            '',
            ''
        ],
        _id:'2'
    }
]

class NewsContainer extends Component{

    async componentDidMount(){
        await store.dispatch(actions.recentArticlesReceived(allArticles))
    }

    render(){
        const {articles, articlesLoading} = this.props
        let content;

        const articlesRendered = articles.map((article,i)=>{
            return (
                article
            )
        })

        if(articles.length>0 && !articlesLoading){
            content = (
                <div className="news-container">
                    <RecentArticlesCard data={articlesRendered}></RecentArticlesCard>
                    <MonthlyArticlesCard></MonthlyArticlesCard>
                </div>

            )
        }else if(articles.length===0 && !articlesLoading){
            content = (
                <p>
                    No article posted yet
                </p>
            )
        }else if(articlesLoading){
            content = (
                <div className="text-center loader">
                    <Loader type="Oval"
                    color="#60DDC9"/>
                </div>
            )
        }

        return(
            <div>
                {content}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        articles : state.newsReducer.allRecentArticles,
        articlesLoading : state.newsReducer.allArticlesLoading
    }
}

export default connect(mapStateToProps)(NewsContainer);