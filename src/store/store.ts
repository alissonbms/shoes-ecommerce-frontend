import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'

// Reducers
import rootReducer from './root-reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer']
}

const persistedRootReducer = persistReducer(persistConfig, rootReducer)

// Old Way
// export const store = createStore(
//   persistedRootReducer,
//   applyMiddleware(thunk, logger)
// )

// Redux Toolkit (Modern Way)
export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: [thunk, logger]
})

export const persitedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
