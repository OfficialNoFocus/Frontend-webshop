export function setLoggedIn(isLoggedIn) {
  return {
    type: 'set-logged-in',
    payload: {isLoggedIn}
  }
}

export function setLoading(loading) {
  return {
    type: 'set-loading',
    payload: {isLoading: loading}
  }
}
export function setGeneral(general){
  return {
    type: 'set-general',
    payload: general
  }

}
export function setApiToken(token){
  return {
    type: 'set-api-token',
    payload: token
  }
}
export function login() {
  return {
    type: 'login',
    payload: {isLoggedIn: true}
  }
}
