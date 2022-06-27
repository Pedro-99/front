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
export const incrementQty = createAsyncThunk('cart/incrementQty', async (data, thunkAPI) => {
  
  const {productId,sessionId,productQty} = data

  try {
    return await cartService.incrementProductQty(productId,sessionId,{"quantity" : productQty})
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})
export const removeCartItem = createAsyncThunk('cart/removeCartItem', async (data, thunkAPI) => {
  
  const {productId,sessionId} = data

  try {
    return await cartService.removeCartItem(productId,sessionId)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})
export const clearAllcartItems = createAsyncThunk('cart/clearCartItems', async (sessionId, thunkAPI) => {
  
  try {
    return await cartService.clearCartItems(sessionId)
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
        state.cart = action.payload.data
        state.message = action.payload.response.msg
      })
      .addCase(incrementQty.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = null
        
      })

      .addCase(removeCartItem.pending, (state) => {
        state.isLoading = true
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.cart = action.payload.data
        state.message = action.payload.response.msg
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = null
        
      })

      .addCase(clearAllcartItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(clearAllcartItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.cart = action.payload.data
        state.message = action.payload.response.msg
      })
      .addCase(clearAllcartItems.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = null
        
      })
     
  },
})

export const { reset } = shoppingSessionSlice.actions
export default shoppingSessionSlice.reducer