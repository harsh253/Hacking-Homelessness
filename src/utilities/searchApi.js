async function searchOrgs(orgs,event){
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
    store.dispatch(actions.filterDonationOrgs(filteredOrgs,searching))
}