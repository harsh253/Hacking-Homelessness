const mongoose = require('mongoose')
require('./../db/mongoose.js')

const News = mongoose.model('News',{
	heading:{
		type:String,
		required:true
	},
	teaser:{
		type:String,
		maxlength:215,
		required:true
	},
	created:{
		type:Date,
		required:true,  
		default: new Date()
    },
    month:{
    	type:Number,
    	required:true
    },
    year:{
    	type:Number,
    	required:true
    },
	content:{
		type:Array,
		required:true
	}
	
})


module.exports = News