import passport from 'passport'
import { Strategy } from 'passport-http-bearer'

export class UnauthenticatedError extends Error {}

export const readAuth = (userFromToken): any => {
  passport.use(new Strategy((token, cb) => {
    cb(null, userFromToken(token))
  }))

  return (req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info, status) => {
      if (err != null) {
        return next(err)
      }
      if (user !== false) {
        req.user = user
      }
      next()
    })(req, res, next)
  }
}

export const requireAuth = (req, res, next): void => {
  // must added after readAuth, as that adds the req.user object
  if (req.user == null) {
    next(new UnauthenticatedError())
    return
  }
  next()
}
