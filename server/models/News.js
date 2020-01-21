const mongoose = require('mongoose')
require('./../db/mongoose.js')

const News = mongoose.model('News',{
	heading:{
		type:String,
		required:true
	},
	teaser:{
		type:String,
		maxlength:200,
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

// news = {
// 	heading: 'Home For All Setting New Records',
// 	teaser: 'The organization claims to have rescued the maximum number of people in London till date. Read more to find out how.',
// 	month: 0,
// 	year: 2020,
// 	content:[
// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ullamcorper eget nulla facilisi. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Justo donec enim diam vulputate ut pharetra sit. Vestibulum lectus mauris ultrices eros in cursus. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Facilisis mauris sit amet massa vitae. At in tellus integer feugiat scelerisque varius morbi enim nunc. Nisl tincidunt eget nullam non nisi. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Euismod nisi porta lorem mollis aliquam ut. A condimentum vitae sapien pellentesque. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere.',
//         'Quis vel eros donec ac odio tempor orci. Eget nunc scelerisque viverra mauris in aliquam. Sit amet nisl suscipit adipiscing. Vitae tortor condimentum lacinia quis. Tincidunt ornare massa eget egestas. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Proin sed libero enim sed faucibus turpis in. Quis viverra nibh cras pulvinar. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Nunc non blandit massa enim nec dui nunc. Id velit ut tortor pretium viverra suspendisse. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Dui ut ornare lectus sit amet. Purus semper eget duis at tellus at urna. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. In hac habitasse platea dictumst vestibulum. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Purus in mollis nunc sed.',
//         'Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Dolor sed viverra ipsum nunc aliquet bibendum. Quis auctor elit sed vulputate. In hac habitasse platea dictumst quisque. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Egestas sed sed risus pretium quam vulputate. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Condimentum lacinia quis vel eros donec. Cras sed felis eget velit aliquet sagittis. Tempus egestas sed sed risus pretium.',
//         'Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Dolor sed viverra ipsum nunc aliquet bibendum. Quis auctor elit sed vulputate. In hac habitasse platea dictumst quisque. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Egestas sed sed risus pretium quam vulputate. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Condimentum lacinia quis vel eros donec. Cras sed felis eget velit aliquet sagittis. Tempus egestas sed sed risus pretium.'
// 	]
// }

// const dummyNews = new News(news);
// dummyNews.save()


module.exports = News