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
    addTodo: (state, action) => {
      const { id, text } = action.payload;
      state.push({ id, title: text, complete: false });
    },
    deleteTodo: (state, action) => {
      const id:number = action.payload;
      return state.filter((e) => e.id !== id);
    }
  }
})

export const {addTodo, deleteTodo} = slice.actions

export default slice.reducer