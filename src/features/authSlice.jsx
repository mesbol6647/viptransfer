// // import { createSlice } from "@reduxjs/toolkit";
// // const initialState = {
// //   user: "",
// //   loading: false,
// //   error: false,
// //   token: "",
// // };

// // const authSlice = createSlice({
// //   name: "auth",
// //   initialState,
// //   reducers: {
// //     fetchStart: (state) => {
// //       state.loading = true;
// //     },
// //     loginSuccess: (state, { payload }) => {
// //       state.loading = false;
// //       state.user = payload.user.username;
// //       state.token = payload.token;
// //     },
// //     registerSuccess:(state, {payload})=>{
// //       state.loading =false;
// //       state.user=payload.data.username;
// //       state.token=payload.token;
// //     },
// //     logoutSuccess: (state)=>{
// //       state.user=""
// //       state.loading= false
// //       state.token=""


// //     },
// //     fetchFail: (state) => {
// //       state.loading = false;
// //       state.error = true;
// //     },
// //   },
// // });

// // export const { fetchStart, fetchFail, loginSuccess, registerSuccess, logoutSuccess } = authSlice.actions;
// // export default authSlice.reducer; 


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,
//   loading: false,
//   error: false,
//   token: "",
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     fetchStart: (state) => {
//       state.loading = true;
//     },
//     loginSuccess: (state, { payload }) => {
//       state.loading = false;
//       state.user = payload.user; // ✅ NESNE olarak ata
//       state.token = payload.token;
//     },
//     registerSuccess: (state, { payload }) => {
//       state.loading = false;
//       state.user = payload.data; // ✅ NESNE olarak ata
//       state.token = payload.token;
//     },
//     logoutSuccess: (state) => {
//       state.user = null;
//       state.loading = false;
//       state.token = "";
//     },
//     fetchFail: (state) => {
//       state.loading = false;
//       state.error = true;
//     },
//   },
// });

// export const {
//   fetchStart,
//   fetchFail,
//   loginSuccess,
//   registerSuccess,
//   logoutSuccess,
// } = authSlice.actions;

// export default authSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = {
        email: action.payload.email,
        uid: action.payload.uid,
      };
    },
    
    registerSuccess: (state, action) => {
      state.loading = false;
      state.user = {
        email: action.payload.email,
        uid: action.payload.uid,
      };
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.user = null;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
