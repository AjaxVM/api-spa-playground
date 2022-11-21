import { UnauthenticatedError } from './authn'

export const errorFormatter = (err, req, res, next): void => {
  // catch any expected errors here
  if (err instanceof UnauthenticatedError) {
    return res.status(401).json({
      message: 'Unauthenticated'
    })
  }

  // any other errors get caught/logged
  console.error('Unexpected Error:', err)

  res.status(500).json({
    message: 'Unexpected Server Error'
  })
}
