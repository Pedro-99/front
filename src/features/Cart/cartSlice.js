import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cartService from './cartService'

// Get cart from localStorage
const cart = JSON.parse(localStorage.getItem('cart'))
// cart: cart ? cart : null,

const initialState = {
  cart: cart ? cart : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",

}


export const getCart = createAsyncThunk('cart/getcart', async (user, thunkAPI) => {
  try {
    return await cartService.getCartItems(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})
export const incrementQty = createAsyncThunk('product/incrementQty', async (productId,sessionId, thunkAPI) => {
  try {
    return await cartService.incrementProductQty(26,2)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const shoppingSessionSlice = createSlice({
  name: 'cart',
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
      .addCase(getCart.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.cart = action.payload
      })
      .addCase(getCart.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.cart = null
      })
      .addCase(incrementQty.pending, (state) => {
        state.isLoading = true
      })
      .addCase(incrementQty.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload.msg
      })
      .addCase(incrementQty.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = null
        
      })
     
  },
})

export const { reset } = shoppingSessionSlice.actions
export default shoppingSessionSlice.reducer