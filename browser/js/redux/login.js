import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const LOGIN = 'SET_CURRENT_USER'

/* ------------   ACTION CREATORS     ------------------ */

const login = user => ({type: LOGIN, user});

/* ------------       REDUCER     ------------------ */

export default function reducer (currentUser = {}, action) {
  switch (action.type) {
    case LOGIN:
    return action.user

  default:
  return currentUser
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const loginUser = (email, password) => dispatch => {
  axios.post(`/login`, {email, password})
  .then(res => {
    console.log('FROM THUNK', res.data)
    dispatch(login(res.data))
  })
  .catch(err => console.error('Could not login.', err))
}
