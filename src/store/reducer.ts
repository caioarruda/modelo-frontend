import * as actionTypes from './actionTypes';

const initialState: UserState = {
  user: {
    id: '',
    username: '',
    pets: []
  }
};

const reducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case actionTypes.ADD_USER: {
      const newUser: IUser = {
        id: action.user.id,
        username: action.user.username,
        pets: action.user.pets
      };
      return {
        ...state,
        user: newUser
      };
    }
    case actionTypes.REMOVE_USER:
      return {
        ...state,
        user: initialState.user
      };
  }
  return state;
};

export default reducer;
