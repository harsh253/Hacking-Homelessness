const mongoose = require('mongoose')
require('./../db/mongoose.js')

const Organization = mongoose.model('Organizations',{
		name: {
                        type:String,
                        required: true
                        },
                teaser:{
                         type:String,
                         required: true,
                         maxlength: 35
                },
                description: {
                         type:Array,
                         required: true
                         },
                established: Number,
                location: String,
                website: String,
                donation: String
})

// const org = {
//     "name" : "Organization A",

//     "teaser" : "Lorem olor sit amet, diam .",
//     "description":[
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     'Neque egestas congue quisque egestas. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Ipsum dolor sit amet consectetur adipiscing elit. Nunc eget lorem dolor sed viverra ipsum. Libero enim sed faucibus turpis in eu mi bibendum. Elit scelerisque mauris pellentesque pulvinar. Nisi vitae suscipit tellus mauris a diam. Id consectetur purus ut faucibus pulvinar elementum integer enim. Enim ',
//     'Neque egestas congue quisque egestas. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Ipsum dolor sit amet consectetur adipiscing elit. Nunc eget lorem dolor sed viverra ipsum. Libero enim sed faucibus turpis in eu mi bibendum. Elit scelerisque mauris pellentesque pulvinar. Nisi vitae suscipit tellus mauris a diam. Id consectetur purus ut faucibus pulvinar elementum integer enim. Enim '
//     ],
//     "established" : 2005,
//     "location" : "London",
//     "website" : "www.org.com",
//     "donation" : "www.org.com/donate",
// }
// const orr = new Organization(org)
// orr.save()

module.exports = Organization

