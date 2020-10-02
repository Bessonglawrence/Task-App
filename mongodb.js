// CRUD create update update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// Connection URL
const connectionURL = 'mongodb://localhost:27017';

// Database Name
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error){
        return console.log('Unable to connect to Database')
    }

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: "Bessong lawrence",
        town: "Buea"
    }, (error, result) => {
        if (error){
            return console.log('Unable to insert user')
        }
        console.log(result.ops)
    })
})