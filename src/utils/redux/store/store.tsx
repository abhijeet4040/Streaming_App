import { configureStore} from '@reduxjs/toolkit'
import favoriteSlice from '../slices/favoriteSlice'



const store = configureStore({
    reducer: {
      favorites : favoriteSlice
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
