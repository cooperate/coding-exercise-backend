import mongoose from "mongoose";
import * as dotenv from 'dotenv';

dotenv.config();

const uri =
  "mongodb+srv://dbUser:GyAHUPbEGQt@!s6@cluster0-bciwc.mongodb.net/coding-exercise-db?retryWrites=true&w=majority";

const mongooseConnect = () => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  //Get the default connection
  var db = mongoose.connection;

  //Bind connection to error event (to get notification of connection errors)
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
};

export default mongooseConnect;
