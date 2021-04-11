import * as c from "../actions/types"

export default (state = {}, action) => {
  switch (action.type){
    case c.LOADED_LIKES: {
      return {likes: action.likes}
    }
    default:
      return state;
  }
}