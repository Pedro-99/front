import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ratingService from './ratingService';

const initialState = {
  rating: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
}

// Get products Rating
export const getProductRating = createAsyncThunk(
  'products/rating',
  async (_, thunkAPI) => {
    try {

      return await ratingService.getProductRating()
    } catch(error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const ratingSlice = createSlice({
  name: 'productRating',
  initialState,
  reducers: {
    reset: (state) => initialState,

  },
  extraReducers: (builder) => {
    builder
    .addCase(getProductRating.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getProductRating.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.rating = action.payload
    })
    .addCase(getProductRating.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
    })


 
  },
})

export const { reset } = ratingSlice.actions
export default ratingSlice.reducer