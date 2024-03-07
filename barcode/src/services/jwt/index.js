import jwt from 'express-jwt'
//const env = process.env.NODE_ENV || 'development'
// import config from '../../config/config.json'

export const token = (req, res, next) =>  {
  const handleErrorNext = err => {
    // console.log('err: ', err)
    if (err) {
      res.status(401).json({
        error: err.message
      });
    }
    next(err);
  };
  const middleware = jwt({
    secret: (req, payload, done) => {
      if (!payload) { return done(new Error('Invalid token')) }
      if (!payload.confirm) { return done(new Error('User is not confirmed'))}
      if (!payload.id) { return done(new Error('Missing user id'))}
      done(null, process.env.JWT_SECRET)
    }
  })

  middleware(req, res, handleErrorNext);
}

export const generalManager = (req, res, next) =>  {
  const handleErrorNext = err => {
    // console.log('err: ', err)
    if (err) {
      res.status(401).json({
        error: err.message
      });
    }
    next(err);
  };
  const middleware = jwt({
    secret: (req, payload, done) => {
      if (!payload) { return done(new Error('Invalid token')) }
      if (!payload.confirm) { return done(new Error('User is not confirmed'))}
      if (payload.role !== 'generalmanager') { return done(new Error('User is not a generalmanager'))}
      if (!payload.id) { return done(new Error('Missing user id'))}
      done(null, process.env.JWT_SECRET)
    }
  })

  middleware(req, res, handleErrorNext);
}