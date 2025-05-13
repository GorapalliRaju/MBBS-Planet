import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Function to map the filter values
const mapFilter = (filter: string): string => {
  switch (filter) {
    case 'AIQ ':
      return 'aiq';
    case 'CAT Wise ':
      return 'catWise';
    case 'State ':
      return 'state';
    case 'Year-wise ':
      return 'yearWise';
    default:
      return filter; // Return the original filter if no mapping is found
  }
};

// Async thunk to fetch premium files
export const fetchPremiumData = createAsyncThunk(
  'premiumData/fetchPremiumData',
  async ({ filters, sort }: { filters: string[]; sort: string }) => {
    // Map the sort value as needed
    if (sort === 'Year-wise') {
      sort = 'yearWise';
    }

    // Map the filters to the required format
    const mappedFilters = filters.map((filter) => mapFilter(filter));

    let url = 'https://mbbs-backend-3.onrender.com/api/content/';
    console.log("filters,sort", mappedFilters, sort);

    // Add filters and sort to the URL
    if (mappedFilters.length > 0) {
      url += `?filters=${mappedFilters.join(',')}`;
    }
    if (sort) {
      url += `&sort=${sort}`;
    }

    const response = await fetch(url);

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
  _id:string;
  title: string;
  description: string;
  fileUrl: string;
  fileType:string;
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
