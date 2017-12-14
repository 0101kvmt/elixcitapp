import { Router } from 'express';


import { generateAccessToken, respond, authenticate } from '../../../middleware/auth';

export default({ db }) => {
  let api = Router();

  return api;
}
