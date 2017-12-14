import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

let Schema = mongoose.Schema;


let UserSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    required: [true, 'Please create a username!'],
    unique: [true, 'Sorry, this username is already taken.'],
    maxLength: 20
  },
  password: {
    type: String,
    min: [6, 'Your password should be greater than 6 characters.'],
  },
  mobilePhone: {
    required: true,
    unique: true,
    type: Number,
    maxLength: 9
  },
  profilePicture: {
    type: String,
  },
  biography: {
    type: String,
  },
  universityName: {
    required: true,
    type: String,
  },
  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  opinions: [{
    type: Schema.Types.ObjectId,
    ref: 'Opinion'
  }],
  challenges: [{
    type: Schema.Types.ObjectId,
    ref: 'Challenge'
  }],
  resettoken: {
    type: String,

 },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);
