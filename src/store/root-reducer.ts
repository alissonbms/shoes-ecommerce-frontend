import { combineReducers } from 'redux'

// Reducers
import userReducer from './reducers/user/user.reducer'
import cartReducer from './reducers/cart/cart.reducer'

const rootReducer = combineReducers({ userReducer, cartReducer })

export default rootReducer
