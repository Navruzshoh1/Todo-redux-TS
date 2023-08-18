import { createSlice } from '@reduxjs/toolkit'

export interface ITodo {
  id:number,
  title:string,
  complete:boolean
}

const initialState: ITodo[] = [
  {
    id: 1,
    title: 'Todo 1',
    complete: false
  },
  {
    id: 2,
    title: 'Todo 2',
    complete: false
  },
];

export const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    
  }
})

export const {} = slice.actions

export default slice.reducer