const mongoose = require('mongoose')
require('./../db/mongoose.js')

const Ideas = mongoose.model('Ideas',{
	topic:{
		type:String,
		required:true
	},
	author:{
		type:String,
		required:true
	},
	replies:{
		type:Number,
		default:0},
	 created:{
        type:Date,
        required:true,  
        default: new Date()
    },
	lastActivity:{
		type:Date},
	description:{
		type:Array,
		required:true
	},
	comments:Array
})

// idea = {
// 	topic:"saket",
// 	author:"bhatt",
// 	description:["saket","bhatt"],

// }
// const id = new Ideas(idea)
// id.save()
module.exports = Ideas



