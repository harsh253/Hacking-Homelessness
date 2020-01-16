const mongodb = require('mongodb')
const organizationArray = require('./GetOrgsData')
console.log(organizationArray.arr)

const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'manager'


MongoClient.connect(connectionURL,{useUnifiedTopology: true},(error,client) =>{
	if(error){
		return console.log("Unable to connect to database")
	}
	console.log("connected!")

	const db = client.db(databaseName)

	
	db.collection('organization').insertMany(
		organizationArray.arr, 
		(error,result) =>{
			if(error){
				return console.log(error)
			}
			console.log("Successfully inserted " + result.insertedCount + "items")
		}
		)
		
	


	})
