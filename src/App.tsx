/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */

import { onAuthStateChanged } from 'firebase/auth'
import { getDocs, collection, where, query } from 'firebase/firestore'
import { FunctionComponent, useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Loading } from './components/loading/loading.component'

// Utilities
import { auth, db } from './config/firebase.config'
import { UserContext } from './contexts/user.context'
import { userConverter } from './converters/firestore.converters'

// Pages
import HomePage from './pages/home/Home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'

const App: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true)
  const { isAuthenticated, login, logout } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    if (isAuthenticated && !user) {
      logout()

      return setIsInitializing(false)
    }

    if (!isAuthenticated && user) {
      const querySnapshot = await getDocs(
        query(
          collection(db, 'users').withConverter(userConverter),
          where('id', '==', user.uid)
        )
      )
      const userFromFirestore = querySnapshot.docs[0]?.data()
      login(userFromFirestore)

      return setIsInitializing(false)
    }

    // !isAuthenticated && !user
    return setIsInitializing(false)
  })

  if (isInitializing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
