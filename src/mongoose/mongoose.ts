import mongoose from 'mongoose';
import {Item} from '@model/item';
//const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:GyAHUPbEGQt@!s6@cluster0-bciwc.mongodb.net/coding-exercise-db?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("coding-exercise-db").collection("items");
//   // perform actions on the collection object
//   ////mongodb+srv://dbUser:GyAHUPbEGQt@!s6@cluster0-bciwc.mongodb.net/coding-exercise-db?retryWrites=true&w=majority
//   client.close();
// });
(async () => {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "test" });
  
    const { _id: id } = await Item.create({ name: 'JohnDoe' } as User); // an "as" assertion, to have types for all properties
    const user = await Item.findById(id).exec();
  
    console.log(user); // prints { _id: 59218f686409d670a97e53e0, name: 'JohnDoe', __v: 0 }
  })();