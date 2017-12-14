require ('dotenv').config();
import mongoose from 'mongoose';

export default callback => {

    mongoose.Promise = global.Promise;

  let db = mongoose.connect(
    process.env.MONGODB_URI,
    {
      useMongoClient: true,
    });
  callback(db);
}
