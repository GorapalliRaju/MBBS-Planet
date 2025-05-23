import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk to fetch user details
export const fetchUserDetails = createAsyncThunk(
  'userDetails/fetchUserDetails',
  async () => {
    const response = await fetch('https://mbbs-backend-3.onrender.com/api/user/getUser'); // update this to your actual route

    if (!response.ok) {
      throw new Error('Failed to fetch user details');
    }

    const result = await response.json();
    console.log("Fetched user details:", result);

    return result.data;  // Assuming the structure: { success: true, data: { name, inputType, ... } }
  }
);

// Define the state interface
interface UserDetailsState {
  isLoading: boolean;
  user: {
    name: string;
    inputType: string;
    value: string;
    category: string;
    state: string;
    city: string;
    phoneNumber: string;
    fathersName: string;
    exam: string;
    premiumUser: boolean;
    profileUpdated: boolean;
    services: {
      ChoiceFilling: {
        isActive: boolean;
      };
      callSenior: {
          isActive: boolean;
          unlockedVia: string;
        };
        checkYourList: {
          isActive: boolean;
        };
        collegePredictor: {
          isActive: boolean;
          previousResults: any[]; // replace `any` with appropriate type if known
          searchesLeft: number;
        };
        counsellorList: {
          isActive: boolean;
        };
        premiumContent: {
          isActive: boolean;
          unlockedVia: string;
        };
    };
  } | null;
  isError: boolean;
}


// Initial state
const initialState: UserDetailsState = {
  isLoading: false,
  user: null,
  isError: false,
};

// Slice
const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.user = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default userDetailsSlice.reducer;
