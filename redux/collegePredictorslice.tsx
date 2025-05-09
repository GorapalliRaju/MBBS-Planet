import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action
export const fetchPredictionData = createAsyncThunk(
  'collegePredictor/fetchPredictionData',
  async () => {
    const response = await fetch('http://192.168.55.102:7000/');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();  // 👈 Parse JSON here
    console.log("Fetched data:", data);  // 👈 This logs the actual content
    return data;
  }
);


interface CollegePredictorState {
  isLoading: boolean;
  data: any;
  isError: boolean;
}

const initialState: CollegePredictorState = {
  isLoading: false,
  data: null,
  isError: false,
};

const collegePredictorSlice = createSlice({
  name: 'collegePredictor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPredictionData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.data = null;  // Reset previous data when refetching
      })
      .addCase(fetchPredictionData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchPredictionData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default collegePredictorSlice.reducer;
