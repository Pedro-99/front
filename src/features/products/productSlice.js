import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from './productService'

const initialState = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get products
export const getProducts = createAsyncThunk(
  'products/getAll',
  async (_, thunkAPI) => {
    try {

      return await productService.getProducts()
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
// Get product by id
export const getProductById = createAsyncThunk(
  'products/getProductById',
  async (productId, thunkAPI) => {
    try {
      return await productService.getProductById(productId)
    } catch (error) {
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

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: (state) => initialState,

  },
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.products = action.payload
    })
    .addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
    .addCase(getProductById.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getProductById.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.products = action.payload
    })
    .addCase(getProductById.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })

 
  },
})

export const { reset } = productSlice.actions
export default productSlice.reducer