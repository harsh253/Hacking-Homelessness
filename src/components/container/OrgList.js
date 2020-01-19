import React, {Component} from 'react';
import Loader from 'react-loader-spinner'
import {connect} from 'react-redux';
import store from '../../store/store';
import * as actions from '../../actions';
import OrganizationCard from '../presentations/OrganizationCard';
import { Button,FormGroup, Input } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import fetchApi from '../../utilities/fetchApi';

// var organizations = [
//     {
//         id:1,
//         name: 'Home For All',
//         teaser: 'Lorem olor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
//         established: 2005,
//         location: 'London',
//         website: 'www.org.com',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Ipsum dolor sit amet consectetur adipiscing elit. Nunc eget lorem dolor sed viverra ipsum. Libero enim sed faucibus turpis in eu mi bibendum. Elit scelerisque mauris pellentesque pulvinar. Nisi vitae suscipit tellus mauris a diam. Id consectetur purus ut faucibus pulvinar elementum integer enim. Enim nulla aliquet porttitor lacus luctus. Ut consequat semper viverra nam libero justo laoreet sit amet. Ultricies leo integer malesuada nunc vel risus. Turpis cursus in hac habitasse platea dictumst. Ultrices sagittis orci a scelerisque. Quam pellentesque nec nam aliquam sem et tortor consequat id. Tincidunt eget nullam non nisi est sit amet facilisis. Euismod in pellentesque massa placerat duis ultricies lacus sed. Non pulvinar neque laoreet suspendisse interdum. Et netus et malesuada fames. Velit euismod in pellentesque massa placerat duis ultricies. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Sed nisi lacus sed viverra tellus in. Sed egestas egestas fringilla phasellus faucibus. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Praesent tristique magna sit amet purus. Nibh ipsum consequat nisl vel pretium lectus. Eget magna fermentum iaculis eu non diam phasellus vestibulum.Urna id volutpat lacus laoreet non curabitur gravida arcu. Faucibus a pellentesque sit amet porttitor eget. Fermentum dui faucibus in ornare quam. Ultricies tristique nulla aliquet enim tortor at auctor urna. At auctor urna nunc id cursus metus aliquam eleifend mi. Magna ac placerat vestibulum lectus. Tincidunt tortor aliquam nulla facilisi cras. Fermentum dui faucibus in ornare quam. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Luctus accumsan tortor posuere ac ut. Posuere morbi leo urna molestie at elementum eu facilisis sed. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Iaculis at erat pellentesque adipiscing commodo elit. Faucibus et molestie ac feugiat. Leo vel orci porta non pulvinar neque laoreet. Risus ultricies tristique nulla aliquet enim tortor. Nulla facilisi nullam vehicula ipsum a arcu cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Dui id ornare arcu odio ut sem nulla. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Imperdiet dui accumsan sit amet nulla facilisi morbi. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Ut pharetra sit amet aliquam id. Eget nullam non nisi est sit amet facilisis. Quam nulla porttitor massa id.',
//         donation: 'www.org.com/donate'
//     },
//     {
//         id:2,
//         name: 'Sheltered',
//         teaser: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
//         established: 2015,
//         location: 'London',
//         website: 'www.org.com',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Ipsum dolor sit amet consectetur adipiscing elit. Nunc eget lorem dolor sed viverra ipsum. Libero enim sed faucibus turpis in eu mi bibendum. Elit scelerisque mauris pellentesque pulvinar. Nisi vitae suscipit tellus mauris a diam. Id consectetur purus ut faucibus pulvinar elementum integer enim. Enim nulla aliquet porttitor lacus luctus. Ut consequat semper viverra nam libero justo laoreet sit amet. Ultricies leo integer malesuada nunc vel risus. Turpis cursus in hac habitasse platea dictumst. Ultrices sagittis orci a scelerisque. Quam pellentesque nec nam aliquam sem et tortor consequat id. Tincidunt eget nullam non nisi est sit amet facilisis. Euismod in pellentesque massa placerat duis ultricies lacus sed. Non pulvinar neque laoreet suspendisse interdum. Et netus et malesuada fames. Velit euismod in pellentesque massa placerat duis ultricies. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Sed nisi lacus sed viverra tellus in. Sed egestas egestas fringilla phasellus faucibus. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Praesent tristique magna sit amet purus. Nibh ipsum consequat nisl vel pretium lectus. Eget magna fermentum iaculis eu non diam phasellus vestibulum.Urna id volutpat lacus laoreet non curabitur gravida arcu. Faucibus a pellentesque sit amet porttitor eget. Fermentum dui faucibus in ornare quam. Ultricies tristique nulla aliquet enim tortor at auctor urna. At auctor urna nunc id cursus metus aliquam eleifend mi. Magna ac placerat vestibulum lectus. Tincidunt tortor aliquam nulla facilisi cras. Fermentum dui faucibus in ornare quam. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Luctus accumsan tortor posuere ac ut. Posuere morbi leo urna molestie at elementum eu facilisis sed. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Iaculis at erat pellentesque adipiscing commodo elit. Faucibus et molestie ac feugiat. Leo vel orci porta non pulvinar neque laoreet. Risus ultricies tristique nulla aliquet enim tortor. Nulla facilisi nullam vehicula ipsum a arcu cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Dui id ornare arcu odio ut sem nulla. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Imperdiet dui accumsan sit amet nulla facilisi morbi. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Ut pharetra sit amet aliquam id. Eget nullam non nisi est sit amet facilisis. Quam nulla porttitor massa id.',
//         donation: 'www.org.com/donate'
//     },
//     {
//         id:3,
//         name: 'Acting For Life',
//         teaser: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
//         established: 2017,
//         location: 'India',
//         website: 'www.org.com',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Ipsum dolor sit amet consectetur adipiscing elit. Nunc eget lorem dolor sed viverra ipsum. Libero enim sed faucibus turpis in eu mi bibendum. Elit scelerisque mauris pellentesque pulvinar. Nisi vitae suscipit tellus mauris a diam. Id consectetur purus ut faucibus pulvinar elementum integer enim. Enim nulla aliquet porttitor lacus luctus. Ut consequat semper viverra nam libero justo laoreet sit amet. Ultricies leo integer malesuada nunc vel risus. Turpis cursus in hac habitasse platea dictumst. Ultrices sagittis orci a scelerisque. Quam pellentesque nec nam aliquam sem et tortor consequat id. Tincidunt eget nullam non nisi est sit amet facilisis. Euismod in pellentesque massa placerat duis ultricies lacus sed. Non pulvinar neque laoreet suspendisse interdum. Et netus et malesuada fames. Velit euismod in pellentesque massa placerat duis ultricies. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Sed nisi lacus sed viverra tellus in. Sed egestas egestas fringilla phasellus faucibus. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Praesent tristique magna sit amet purus. Nibh ipsum consequat nisl vel pretium lectus. Eget magna fermentum iaculis eu non diam phasellus vestibulum.Urna id volutpat lacus laoreet non curabitur gravida arcu. Faucibus a pellentesque sit amet porttitor eget. Fermentum dui faucibus in ornare quam. Ultricies tristique nulla aliquet enim tortor at auctor urna. At auctor urna nunc id cursus metus aliquam eleifend mi. Magna ac placerat vestibulum lectus. Tincidunt tortor aliquam nulla facilisi cras. Fermentum dui faucibus in ornare quam. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Luctus accumsan tortor posuere ac ut. Posuere morbi leo urna molestie at elementum eu facilisis sed. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Iaculis at erat pellentesque adipiscing commodo elit. Faucibus et molestie ac feugiat. Leo vel orci porta non pulvinar neque laoreet. Risus ultricies tristique nulla aliquet enim tortor. Nulla facilisi nullam vehicula ipsum a arcu cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Dui id ornare arcu odio ut sem nulla. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Imperdiet dui accumsan sit amet nulla facilisi morbi. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Ut pharetra sit amet aliquam id. Eget nullam non nisi est sit amet facilisis. Quam nulla porttitor massa id.',
//         donation: 'www.org.com/donate'
//     },
//     {
//         id:4,
//         name: 'Homes Not Jails',
//         teaser: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
//         established: 2017,
//         location: 'London',
//         website: 'www.org.com',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Ipsum dolor sit amet consectetur adipiscing elit. Nunc eget lorem dolor sed viverra ipsum. Libero enim sed faucibus turpis in eu mi bibendum. Elit scelerisque mauris pellentesque pulvinar. Nisi vitae suscipit tellus mauris a diam. Id consectetur purus ut faucibus pulvinar elementum integer enim. Enim nulla aliquet porttitor lacus luctus. Ut consequat semper viverra nam libero justo laoreet sit amet. Ultricies leo integer malesuada nunc vel risus. Turpis cursus in hac habitasse platea dictumst. Ultrices sagittis orci a scelerisque. Quam pellentesque nec nam aliquam sem et tortor consequat id. Tincidunt eget nullam non nisi est sit amet facilisis. Euismod in pellentesque massa placerat duis ultricies lacus sed. Non pulvinar neque laoreet suspendisse interdum. Et netus et malesuada fames. Velit euismod in pellentesque massa placerat duis ultricies. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Sed nisi lacus sed viverra tellus in. Sed egestas egestas fringilla phasellus faucibus. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Praesent tristique magna sit amet purus. Nibh ipsum consequat nisl vel pretium lectus. Eget magna fermentum iaculis eu non diam phasellus vestibulum.Urna id volutpat lacus laoreet non curabitur gravida arcu. Faucibus a pellentesque sit amet porttitor eget. Fermentum dui faucibus in ornare quam. Ultricies tristique nulla aliquet enim tortor at auctor urna. At auctor urna nunc id cursus metus aliquam eleifend mi. Magna ac placerat vestibulum lectus. Tincidunt tortor aliquam nulla facilisi cras. Fermentum dui faucibus in ornare quam. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Luctus accumsan tortor posuere ac ut. Posuere morbi leo urna molestie at elementum eu facilisis sed. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Iaculis at erat pellentesque adipiscing commodo elit. Faucibus et molestie ac feugiat. Leo vel orci porta non pulvinar neque laoreet. Risus ultricies tristique nulla aliquet enim tortor. Nulla facilisi nullam vehicula ipsum a arcu cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Dui id ornare arcu odio ut sem nulla. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Imperdiet dui accumsan sit amet nulla facilisi morbi. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Ut pharetra sit amet aliquam id. Eget nullam non nisi est sit amet facilisis. Quam nulla porttitor massa id.',
//         donation: 'www.org.com/donate'
//     },
//     {
//         id:5,
//         name: 'Horizon House',
//         teaser: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
//         established: 2017,
//         location: 'India',
//         website: 'www.org.com',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Ipsum dolor sit amet consectetur adipiscing elit. Nunc eget lorem dolor sed viverra ipsum. Libero enim sed faucibus turpis in eu mi bibendum. Elit scelerisque mauris pellentesque pulvinar. Nisi vitae suscipit tellus mauris a diam. Id consectetur purus ut faucibus pulvinar elementum integer enim. Enim nulla aliquet porttitor lacus luctus. Ut consequat semper viverra nam libero justo laoreet sit amet. Ultricies leo integer malesuada nunc vel risus. Turpis cursus in hac habitasse platea dictumst. Ultrices sagittis orci a scelerisque. Quam pellentesque nec nam aliquam sem et tortor consequat id. Tincidunt eget nullam non nisi est sit amet facilisis. Euismod in pellentesque massa placerat duis ultricies lacus sed. Non pulvinar neque laoreet suspendisse interdum. Et netus et malesuada fames. Velit euismod in pellentesque massa placerat duis ultricies. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Sed nisi lacus sed viverra tellus in. Sed egestas egestas fringilla phasellus faucibus. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Praesent tristique magna sit amet purus. Nibh ipsum consequat nisl vel pretium lectus. Eget magna fermentum iaculis eu non diam phasellus vestibulum.Urna id volutpat lacus laoreet non curabitur gravida arcu. Faucibus a pellentesque sit amet porttitor eget. Fermentum dui faucibus in ornare quam. Ultricies tristique nulla aliquet enim tortor at auctor urna. At auctor urna nunc id cursus metus aliquam eleifend mi. Magna ac placerat vestibulum lectus. Tincidunt tortor aliquam nulla facilisi cras. Fermentum dui faucibus in ornare quam. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Luctus accumsan tortor posuere ac ut. Posuere morbi leo urna molestie at elementum eu facilisis sed. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Iaculis at erat pellentesque adipiscing commodo elit. Faucibus et molestie ac feugiat. Leo vel orci porta non pulvinar neque laoreet. Risus ultricies tristique nulla aliquet enim tortor. Nulla facilisi nullam vehicula ipsum a arcu cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Dui id ornare arcu odio ut sem nulla. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Imperdiet dui accumsan sit amet nulla facilisi morbi. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Ut pharetra sit amet aliquam id. Eget nullam non nisi est sit amet facilisis. Quam nulla porttitor massa id.',
//         donation: 'www.org.com/donate'
//     },
//     {
//         id:6,
//         name: 'Caretakers Cottage',
//         teaser: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
//         established: 2017,
//         location: 'London',
//         website: 'www.org.com',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Ipsum dolor sit amet consectetur adipiscing elit. Nunc eget lorem dolor sed viverra ipsum. Libero enim sed faucibus turpis in eu mi bibendum. Elit scelerisque mauris pellentesque pulvinar. Nisi vitae suscipit tellus mauris a diam. Id consectetur purus ut faucibus pulvinar elementum integer enim. Enim nulla aliquet porttitor lacus luctus. Ut consequat semper viverra nam libero justo laoreet sit amet. Ultricies leo integer malesuada nunc vel risus. Turpis cursus in hac habitasse platea dictumst. Ultrices sagittis orci a scelerisque. Quam pellentesque nec nam aliquam sem et tortor consequat id. Tincidunt eget nullam non nisi est sit amet facilisis. Euismod in pellentesque massa placerat duis ultricies lacus sed. Non pulvinar neque laoreet suspendisse interdum. Et netus et malesuada fames. Velit euismod in pellentesque massa placerat duis ultricies. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Sed nisi lacus sed viverra tellus in. Sed egestas egestas fringilla phasellus faucibus. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Praesent tristique magna sit amet purus. Nibh ipsum consequat nisl vel pretium lectus. Eget magna fermentum iaculis eu non diam phasellus vestibulum.Urna id volutpat lacus laoreet non curabitur gravida arcu. Faucibus a pellentesque sit amet porttitor eget. Fermentum dui faucibus in ornare quam. Ultricies tristique nulla aliquet enim tortor at auctor urna. At auctor urna nunc id cursus metus aliquam eleifend mi. Magna ac placerat vestibulum lectus. Tincidunt tortor aliquam nulla facilisi cras. Fermentum dui faucibus in ornare quam. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Luctus accumsan tortor posuere ac ut. Posuere morbi leo urna molestie at elementum eu facilisis sed. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Iaculis at erat pellentesque adipiscing commodo elit. Faucibus et molestie ac feugiat. Leo vel orci porta non pulvinar neque laoreet. Risus ultricies tristique nulla aliquet enim tortor. Nulla facilisi nullam vehicula ipsum a arcu cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Dui id ornare arcu odio ut sem nulla. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Imperdiet dui accumsan sit amet nulla facilisi morbi. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Ut pharetra sit amet aliquam id. Eget nullam non nisi est sit amet facilisis. Quam nulla porttitor massa id.',
//         donation: 'www.org.com/donate'
//     },
//     {
//         id:7,
//         name: 'Caretakers Cottage',
//         teaser: 'Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, diam consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
//         established: 2017,
//         location: 'London',
//         website: 'www.org.com',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Ipsum dolor sit amet consectetur adipiscing elit. Nunc eget lorem dolor sed viverra ipsum. Libero enim sed faucibus turpis in eu mi bibendum. Elit scelerisque mauris pellentesque pulvinar. Nisi vitae suscipit tellus mauris a diam. Id consectetur purus ut faucibus pulvinar elementum integer enim. Enim nulla aliquet porttitor lacus luctus. Ut consequat semper viverra nam libero justo laoreet sit amet. Ultricies leo integer malesuada nunc vel risus. Turpis cursus in hac habitasse platea dictumst. Ultrices sagittis orci a scelerisque. Quam pellentesque nec nam aliquam sem et tortor consequat id. Tincidunt eget nullam non nisi est sit amet facilisis. Euismod in pellentesque massa placerat duis ultricies lacus sed. Non pulvinar neque laoreet suspendisse interdum. Et netus et malesuada fames. Velit euismod in pellentesque massa placerat duis ultricies. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Sed nisi lacus sed viverra tellus in. Sed egestas egestas fringilla phasellus faucibus. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Praesent tristique magna sit amet purus. Nibh ipsum consequat nisl vel pretium lectus. Eget magna fermentum iaculis eu non diam phasellus vestibulum.Urna id volutpat lacus laoreet non curabitur gravida arcu. Faucibus a pellentesque sit amet porttitor eget. Fermentum dui faucibus in ornare quam. Ultricies tristique nulla aliquet enim tortor at auctor urna. At auctor urna nunc id cursus metus aliquam eleifend mi. Magna ac placerat vestibulum lectus. Tincidunt tortor aliquam nulla facilisi cras. Fermentum dui faucibus in ornare quam. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Luctus accumsan tortor posuere ac ut. Posuere morbi leo urna molestie at elementum eu facilisis sed. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Iaculis at erat pellentesque adipiscing commodo elit. Faucibus et molestie ac feugiat. Leo vel orci porta non pulvinar neque laoreet. Risus ultricies tristique nulla aliquet enim tortor. Nulla facilisi nullam vehicula ipsum a arcu cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Dui id ornare arcu odio ut sem nulla. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Imperdiet dui accumsan sit amet nulla facilisi morbi. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Ut pharetra sit amet aliquam id. Eget nullam non nisi est sit amet facilisis. Quam nulla porttitor massa id.',
//         donation: 'www.org.com/donate'
//     }

// ]

class OrgList extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            formDetails:{
                org: '',
                select: 'All Countries'
            }
        }
        
    }

    async componentDidMount(){
        let response = await fetchApi('/api/orgs', "GET")
        if(!response.error){
            console.log(response.data)
            store.dispatch(actions.orgsReceived(response.data))
        }else{
            console.log(response.error)
        }
    }

    async searchOrg(orgs,event){
        var details = Object.assign({}, this.state.formDetails)
        details[event.target.name] = event.target.value.trim()
        await this.setState({
            formDetails: details
        })
        let filteredOrgs = orgs;
        let searching = true
        var self = this
        if(this.state.formDetails.org === '' && this.state.formDetails.select === 'All Countries'){
            searching = false
        }else if(this.state.formDetails.select!=='All Countries' && this.state.formDetails.org === '' ){
            filteredOrgs = orgs.filter(function(org){
                return org.location.toLowerCase().search(
                    self.state.formDetails.select.toLowerCase()) !== -1;
                })
        }else if(this.state.formDetails.org !== '' && this.state.formDetails.select === 'All Countries'){
            filteredOrgs = orgs.filter(function(org){
                return org.name.toLowerCase().search(
                    self.state.formDetails.org.toLowerCase()) !== -1;
                })
        }else{
            filteredOrgs = orgs.filter(function(org){
                return org.name.toLowerCase().search(
                    self.state.formDetails.org.toLowerCase()) !== -1;
                }).filter(function(org){
                return org.location.toLowerCase().search(
                    self.state.formDetails.select.toLowerCase()) !== -1;
                })
            }
        store.dispatch(actions.filterOrgs(filteredOrgs,searching))
    }

    render(){
        var {orgsLoading, orgs, filteredOrgs, searching} = this.props;
        const allFilteredOrgs = filteredOrgs.map((org,i)=>{
            return(
                <OrganizationCard history={this.props.history} key={i} id={org._id} name={org.name} teaser={org.teaser} estd={org.established} location={org.location}></OrganizationCard>
            )
        })

        const allOrgs = orgs.map((org,i)=>{
            return(
                <OrganizationCard history={this.props.history} key={i} id={org._id} name={org.name} teaser={org.teaser} estd={org.established} location={org.location}></OrganizationCard>
            )
        })

        let content;
        if(filteredOrgs.length>0 && !orgsLoading && orgs.length>0 && searching){
            content = (
                <div className="card-container">
                    {allFilteredOrgs}
                </div>
            )
        }
        else if(orgs.length>0 && !orgsLoading && !searching){
            content = (
                <div className="card-container">
                    {allOrgs}
                </div>
            )
        }else if(orgs.length===0 && !orgsLoading){
            content = (
                <div>
                    No organizations listed yet
                </div>
            )
        }else if(searching && filteredOrgs.length===0 && !orgsLoading){
            content = (
                <div>
                    No such organization found
                </div>
            )
        }else if(orgsLoading){
            content = (
                <div className="text-center loader">
                    <Loader type="Oval"
                    color="#007bff"/>
                </div>
            )
        }

        return(
            <div className="page-container">
                <h3>Organizations</h3>
                <div className="form-container">
                    <FormGroup className="input-field">
                        <Input type="text" name="org" onChange={(event) => this.searchOrg(orgs, event)} className="input-field-style" placeholder="Search for an organization"></Input>
                    </FormGroup>
                    <span className="in">IN</span>
                    <FormGroup className="input-field">
                        <Input name="location" onChange={(event)=>this.searchOrg(orgs,event)} type="select" name="select" className="input-field-style">
                        <option>All Countries</option>
                        <option>London</option>
                        <option>India</option>
                        </Input>
                    </FormGroup>
                    <Button type="button" className="search-btn" color="primary">Search</Button>
                </div>
                {content}
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        orgsLoading: state.orgReducer.allOrgsLoading,
        orgs: state.orgReducer.orgs,
        filteredOrgs: state.orgReducer.filteredOrgs,
        searching: state.orgReducer.searching
    }
}

export default (connect(mapStateToProps)(OrgList));