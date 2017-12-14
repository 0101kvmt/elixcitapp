import express from 'express';
import middleware from '../middleware';
import initializeDb from '../db';

import user from '../controller/v1/user';
import auth from '../controller/v1/auth';

let router = express();

// Connect to Database
initializeDb(db => {

  // Internal Middleware
  router.use(middleware({ db }));

  // API Routes v1
  router.use('/user', user({ db }));

});

export default router;
