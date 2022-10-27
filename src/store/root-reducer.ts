import { combineReducers } from 'redux'

// Reducers
import userReducer from './toolkit/user/user.slice'
import cartReducer from './toolkit/cart/cart.slice'
import categoryReducer from './reducers/category/category.reducer'

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer
})

export default rootReducer
