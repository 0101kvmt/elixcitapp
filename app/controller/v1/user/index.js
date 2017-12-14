import { Router } from 'express';
import User from '../../../models/user';
import bcrypt from 'bcrypt';
import { defaultResponseModel } from '../../../utils/response';

export default({ db }) => {
  let api = Router();
  var secret = process.env.SECRET;


  return api;
}
