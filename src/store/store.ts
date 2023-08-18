import { configureStore } from '@reduxjs/toolkit'
import counter from '../reducers/counter'
import todoSlice from '../reducers/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counter,
    todos: todoSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch