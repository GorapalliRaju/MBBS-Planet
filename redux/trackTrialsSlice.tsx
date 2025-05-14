import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk to fetch trial count from API
export const fetchTrialCount = createAsyncThunk(
  'trackTrials/fetchTrialCount',
  async () => {
    const response = await fetch('https://mbbs-backend-3.onrender.com/api/user/trials');

    if (!response.ok) {
      throw new Error('Failed to fetch trial count');
    }

    const result = await response.json();
    console.log("Fetched trials:", result);

    // Adjust this if your backend response structure is different
    return result.data.trialCount; 
  }
);

// Define the state interface
interface TrackTrialsState {
  isLoading: boolean;
  trialsRemaining: number | null;
  isError: boolean;
}

// Initial state
const initialState: TrackTrialsState = {
  isLoading: false,
  trialsRemaining: null,
  isError: false,
};

// Create slice
const trackTrialsSlice = createSlice({
  name: 'trackTrials',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrialCount.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTrialCount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.trialsRemaining = action.payload;
      })
      .addCase(fetchTrialCount.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.trialsRemaining = null;
      });
  },
});

export default trackTrialsSlice.reducer;
