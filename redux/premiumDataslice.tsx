import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch premium files
export const fetchPremiumData = createAsyncThunk(
  'premiumData/fetchPremiumData',
  async () => {
    const response = await fetch('http://192.168.55.104:7000/api/content/');
    
    if (!response.ok) {
      throw new Error('Failed to fetch premium files');
    }

    const data = await response.json();
    console.log("Fetched premium files:", data);
    return data;
  }
);

// Define the state type
interface PremiumFile {
  title: string;
  description: string;
  fileUrl: string;
  isPremium: boolean;
  categories: {
    aiq: boolean;
    state: boolean;
    yearWise: boolean;
    catWise: boolean;
  };
  year: number;
}

interface PremiumDataState {
  isLoading: boolean;
  data: PremiumFile[];   // an array of files
  isError: boolean;
}

// Initial state
const initialState: PremiumDataState = {
  isLoading: false,
  data: [],
  isError: false,
};

// Slice
const premiumDataSlice = createSlice({
  name: 'premiumData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPremiumData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPremiumData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchPremiumData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default premiumDataSlice.reducer;
