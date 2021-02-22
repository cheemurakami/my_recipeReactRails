import * as c from "../actions/types"

export default (state = {}, action) => {
  switch (action.type){
    case c.LOADED_RECIPES: {
      return {recipes: action.recipes}
    }
    default:
      return state;
  }
}