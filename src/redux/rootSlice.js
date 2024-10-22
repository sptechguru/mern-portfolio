import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({

  name: "root",
  initialState: {
    loading: false,
    portfolioData: null,
  },

  reducers: {
    showLoading: (state, action) => {
      console.log('show loader', state, 'Action',action);
      state.loading = true;
    },

    hideLoading: (state, action) => {
      console.log('hide loader', state, 'Action',action);
      state.loading = false;
    },

    SetPortfolioData: (state, action) => {
      console.log('portfolioData', state, 'payload',action);
      state.portfolioData = action.payload;
    },
  },
});


export const { showLoading, hideLoading,SetPortfolioData } = rootSlice.actions;

export default rootSlice.reducer;
