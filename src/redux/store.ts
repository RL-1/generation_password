import { configureStore } from '@reduxjs/toolkit'
import { useDispatch,TypedUseSelectorHook, useSelector } from 'react-redux'
import generatorSlice from '../pages/Home/redux/generatorSlice'



export const store = configureStore({
    reducer: {
      home: generatorSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })
  
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
