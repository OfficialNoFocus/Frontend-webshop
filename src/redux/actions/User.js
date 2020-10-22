
export function login(username, password) {
  return {
    type: 'login'
  }
}

export function setUser(user) {
  return {
    type: 'set-user',
    payload: user
  }

}
