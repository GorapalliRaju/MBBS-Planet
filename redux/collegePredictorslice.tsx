import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action
export const fetchPredictionData = createAsyncThunk(
  'collegePredictor/fetchPredictionData',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
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
