import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value:[],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            
                state.value.push({
                    id:Date.now(),
                    text:action.payload,
                    completed:false
                })
            
        },
        deleteTodo: (state, action) => {
            state.value = state.value.filter((todo) => todo.id !== action.payload);
          },
          toggleComplete: (state, action) => {
            const todo = state.value.find((todo) => todo.id === action.payload);
            if (todo) {
              todo.completed = !todo.completed;
            }
          },
    }
})

export const{addTodo,deleteTodo,toggleComplete}=todoSlice.actions;
export default todoSlice.reducer;