import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import shoppingService from './shoppingService'

// Get cart from localStorage
const session = JSON.parse(localStorage.getItem('session'))
// session: session ? session : null,

const initialState = {
  shopping_session:  session ? session : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",

}


export const getSession = createAsyncThunk('shopping/getSession', async (userId, thunkAPI) => {
  try {
    return await shoppingService.getShoppingSession(userId)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const shoppingSessionSlice = createSlice({
  name: 'shopping_session',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSession.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSession.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.shopping_session = action.payload
      })
      .addCase(getSession.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.shopping_session = null
      })
     
  },
})

export const { reset } = shoppingSessionSlice.actions
export default shoppingSessionSlice.reducer