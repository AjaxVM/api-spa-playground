// Rather than implement a full user management system
// define them here for now

const users = {
  bob: {
    scopes: []
  },
  joe: {
    scopes: []
  },
  jane: {
    scopes: []
  },
  dummy: {
    scopes: []
  }
}

const tokens = {
  abc: 'bob',
  def: 'joe',
  ghi: 'jane',
  jkl: 'dummy'
}

export default (token: string): null | object => {
  const name = tokens[token]
  const user = users[name]
  if (user == null) {
    return null
  }
  return {
    name,
    scopes: user.scope
  }
}
