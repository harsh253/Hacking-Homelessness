const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const Organization = require('./models/Organization.js')
const Ideas = require('./models/Ideas.js')
const News = require('./models/News.js')


const app = express()
const port = 4000
app.use(express.json())



app.get('/api/orgs',(req,res)=>{
	Organization.find({}).then((orgs)=>{
		// res.send(orgs)
		// res.status(200)
		res.json({
			status: 200,
			data: orgs
		})

	}).catch((e)=>{
		res.json({
			status:500,
			error:"Internal server error"
		})
	})
})

app.get('/api/orgs/:id', (req,res)=>{
	const orgId = req.params.id;
	console.log('orgId : ' , orgId)

	Organization.findById(orgId, function(err,result){
		if(err){
			res.json({
				error:err
			})
		}else{
			res.json({
				status:200,
				data:result
			})
		}
	})

})

app.get('/api/ideas',(req,res)=>{
	Ideas.find({}).then((ideas)=>{
		res.json({
			status: 200,
			data: ideas
		})

	}).catch((e)=>{
		res.json({
			status:500,
			error:"Internal server error"
		})
	})
})

app.get('/api/idea/:id',(req,res)=>{
	const id = req.params.id
	Ideas.findById(id, function (err,result){
		if(result){
			return res.json({
				data:result
			})
		}
		else
		{
			return res.json({
				error:err
			})
		}

	})
})

app.get('/api/news', (req,res)=>{
	News.find()
	.limit(20)
	.then((news)=>{
		return res.json({
			success: 1,
			data: news
		})
	})
	.catch(err=>{
		res.json({
			success:0,
			error:err
		})
	})
})

app.get('/api/news/:id', (req,res)=>{
	const id = req.params.id;
	News.findById(id,function(err,result){
		if(result){
			formattedDate = result.created.toLocaleDateString('en-En', {
				    year: 'numeric', month: 'long', day: 'numeric'
				})
			return res.json({
				data:result,
				formattedDate
			})
		}else{
			return res.json({
				error:err
			})
		}
	})
})

app.get('/api/news/:year/:month',(req,res)=>{
	const year = req.params.year
	const month = req.params.month
	News.find({
		year,
		month
	}).then((news)=>{
		res.json({
			status: 200,
			data: news
		})
	}).catch((e)=>{
		res.json({
			error: e
		})
		})
	})



app.post('/api/submitIdea',(req,res)=>{
	const newIdea = new Ideas(req.body)
	newIdea.save().then(()=>{
		res.json({
			status:200
	}).catch((e)=>{
		res.json({
			error:e
		})
	})
})
})

app.post('/api/idea/reply/:id',(req,res)=>{
	const id = req.params.id
	const reply = req.body.reply
	const date_now = req.body.date_now
	const username = req.body.username
	

	Ideas.findById(id, function (err,result){
		if(result){
			const comment = {
				username,
				reply
			}
			console.log(result.comments)
			result.comments.push(comment)
			result.lastActivity = date_now
			result.replies+=1;
			result.save().then(()=>{
				console.log("success!")
			}).catch((e)=>{
				return res.json({
				error: e
			})
			})
			res.json({
				status:200
			})
		}
		else
		{
			return res.json({
				error:err
			})
		}

	})
})



		

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})