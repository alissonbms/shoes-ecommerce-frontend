import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// Reducers
import rootReducer from './root-reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer']
}

const persistedRootReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedRootReducer,
  applyMiddleware(thunk, logger)
)
export const persitedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
