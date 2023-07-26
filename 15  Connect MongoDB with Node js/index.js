const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


const getdata = async () => {
    let result = await client.connect();
    let db = result.db("local");
    let collection = db.collection('startup_log')
    let response = await collection.find({}).toArray();
    console.log(result);
}
getdata();