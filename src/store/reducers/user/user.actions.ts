import User from '../../../types/user.types'
import UserActionsTypes from './user.actions-types'

export const loginUser = (user: User): any => ({
  type: UserActionsTypes.LOGIN,
  payload: user
})

export const logoutUser = (): any => ({
  type: UserActionsTypes.LOGOUT
})
