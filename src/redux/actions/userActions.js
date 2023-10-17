import axios from 'axios';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';

const apiUrl = 'https://reqres.in/api/users';

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = (page) => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
       const response = await axios.get(`${apiUrl}?page=${page}`)
       const users = await response?.data?.data
       dispatch(fetchUsersSuccess(users))
    } catch (error) {
        dispatch(fetchUsersFailure(error.message));
    }
  };
};


export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};



export const editUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};