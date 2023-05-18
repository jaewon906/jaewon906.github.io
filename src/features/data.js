import { createSlice } from "@reduxjs/toolkit"

const initialState={
    mode:false
}

const dataSet = createSlice({
    name:'dataSet',
    initialState,
    reducers:{
        modeRdc:(state)=>{
            state.mode = !state.mode
        }
    }
})

export const {modeRdc} = dataSet.actions
export default dataSet.reducer
