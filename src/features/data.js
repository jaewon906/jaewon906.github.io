import { createSlice } from "@reduxjs/toolkit"

const initialState={
    mode:false,
    asideLeftonOff:true,
}

const dataSet = createSlice({
    name:'dataSet',
    initialState,
    reducers:{
        modeRdc:(state)=>{
            state.mode = !state.mode
        },
        leftOnOffRdc:(state,action)=>{
            state.asideLeftonOff = action.payload
        }
    }
})

export const {modeRdc, leftOnOffRdc} = dataSet.actions
export default dataSet.reducer
