declare namespace Express {
  interface Request {
    user: {
      name: string
      scopes: string[]
    }
  }
}
