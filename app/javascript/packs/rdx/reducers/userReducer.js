import * as c from "../actions/types"

export default (state = {}, action) => {
  switch (action.type){
    case c.SIGNED_IN_USER: {
      return {user: action.userInfo}
    }
    default:
      return state;
  }
}