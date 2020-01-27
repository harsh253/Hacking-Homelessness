const mongoose = require('mongoose')
// require('./../db/mongoose.js')

const Organization = mongoose.model('Organizations',{
        name: {
                type:String,
                required: true
        },
        teaser:{
                type:String,
                required: true,
                maxlength: 215,
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
//     "name" : "Aashray Adhikar Abhiyan",

//     "teaser" : "Aashray Adhikar Abhiyan (AAA) is a campaign to address the problems of homeless people of Delhi. AAA believes that it is the fundamental right of every person to have home, food, and clothing.",
//     "description":[
//     'Aashray Adhikar Abhiyan (AAA) is a campaign to address the problems of homeless people of Delhi. AAA believes that it is the fundamental right of every person that everyone should have home, food, and clothing. It is based on the belief that homeless people, too, have the right to live with dignity, in peace and security. We live in one of the biggest republic countries and yet not everyone has a place they can call home. It is the duty of the Government that the necessities of the common person should be provided. We at AAA believe everyone should have a shelter, access to other fundamental rights. Therefore, we started our advocacy by way of campaign to fight homeless people situation in Delhi with the support of Action Aid.',
//     'In order to implement right based approach all the direct interventions on the ground are being conducted by a cadre of trained homeless persons, and aim at securing for the poor and the homeless their rights available under our Constitution, UN covenants/convention and or government welfare schemes. AAA believes that the poor and homeless of Delhi have the right to live in peace, with security and dignity and to have equal social and political rights as all other citizens of Delhi. AAA has tried its best to firmly and consistently stand by the poor and homeless, keeping in view their needs and aspirations by planning and implementing needs appropriate activities and services.',
//     'The service oriented approach aims at rendering services to the poor and homeless people keeping in view their most basic and immediate needs. These services include day and night shelters, holistic healthcare program, and a food program for the children, sick including severely mentally ill patients undergoing treatment and in care, residential educational support to children and providing clothings.',
//     ],
//     "established" : 2000,
//     "location" : "India",
//     "website" : "https://homelesspeople.in/",
//     "donation" : "https://homelesspeople.in/",
// }
// const orr = new Organization(org)
// orr.save()

module.exports = Organization

