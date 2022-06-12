import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import orderService from './orderService';

const order = JSON.parse(localStorage.getItem('order'))

const initialState = {
  order: order ? order : {
    id : null,
    total : null,
    userId : null,
    isPaid : null,
    isDelivered : null,
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  
}

// Get products
export const placeOrder = createAsyncThunk(
  'order/placeOrder',
  async (order, thunkAPI) => {
    try {

      return await orderService.addOrder(order)
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

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    reset: (state) => initialState,

  },
  extraReducers: (builder) => {
    builder
    .addCase(placeOrder.pending, (state) => {
      state.isLoading = true
    })
    .addCase(placeOrder.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.order = action.payload
    })
    .addCase(placeOrder.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      
    })
   
  },
})

export const { reset } = orderSlice.actions
export default orderSlice.reducer