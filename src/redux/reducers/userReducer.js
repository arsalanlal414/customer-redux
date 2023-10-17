import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    ADD_USER,
    EDIT_USER
  } from '../actions/userActions';
  
  const initialState = {
    loading: false,
    users: [],
    error: '',
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
            ...state,
            loading: true,
            };
        case FETCH_USERS_SUCCESS:
            return {
            loading: false,
            users: action.payload,
            error: '',
            };
        case FETCH_USERS_FAILURE:
            return {
            loading: false,
            users: [],
            error: action.payload,
            };

        case ADD_USER:
            const newUser = {
                id: state.users.length + 1,
                ...action.payload,
            };
            return {
                ...state,
                users: [...state.users, newUser],
            };
        
            case EDIT_USER:
                const editedUser = action.payload;
                const updatedUsers = state.users.map((user) => {
                  if (user.id === editedUser.id) {
                    // Update the user with the edited data
                    return { ...user, ...editedUser };
                  }
                  return user;
                });
          
                return {
                  ...state,
                  users: updatedUsers,
                };          

        default:
            return state;
    }
  };
  
  export default userReducer;
  