import { createContext, FunctionComponent, ReactNode, useState } from 'react'
import User from '../types/user.types'

interface UserContextProps {
  currentUser: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
}

export const UserContext = createContext<UserContextProps>({
  currentUser: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
})

interface ProviderProps {
  children: ReactNode
}

export const UserContextProvider: FunctionComponent<ProviderProps> = ({
  children
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const isAuthenticated = currentUser !== null

  const login = (user: User): void => {
    setCurrentUser(user)
  }

  const logout = (): void => {
    setCurrentUser(null)
  }

  return (
    <UserContext.Provider
      value={{ currentUser, isAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}
