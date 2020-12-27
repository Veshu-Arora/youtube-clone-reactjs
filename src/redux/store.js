import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults for localStorage for web

import searchReducer from './reducers/searchReducer';
import selectedVideoReducer from './reducers/selectedVideoReducer';
import recommendedVideoSelectedReducer from './reducers/recommendedVideoSelectedReducer';


const rootReducer = combineReducers ({
    searchReducer : searchReducer,
    selectedVideoReducer : selectedVideoReducer,
    recommendedVideoSelectedReducer : recommendedVideoSelectedReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist:[
    searchReducer,
    selectedVideoReducer,
    recommendedVideoSelectedReducer,
  ]
}



const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)


