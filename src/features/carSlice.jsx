import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cars:[],
    reservations:[],
    loading:false,
    error:false
}

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    fetchStart: (state) => {
        state.loading = true;
      },
    getCarsSuccess:(state, {payload})=>{
        state.cars = payload
        state.loading= false

    },
    fetchFail: (state) => {
        state.loading = false;
        state.error = true;
      },
  }
});

export const {fetchStart, getCarsSuccess,fetchFail} = carSlice.actions

export default carSlice.reducer