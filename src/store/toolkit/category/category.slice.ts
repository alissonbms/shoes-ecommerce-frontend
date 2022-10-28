import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../../config/firebase.config'
import { categoryConverter } from '../../../converters/firestore.converters'
import Category from '../../../types/category.types'

export const fetchCategories = createAsyncThunk(
  'categories/fetch',
  async () => {
    const querySnapshot = await getDocs(
      collection(db, 'categories').withConverter(categoryConverter)
    )

    const categoriesFromFirestore: Category[] = []

    querySnapshot.forEach((doc) => categoriesFromFirestore.push(doc.data()))

    return categoriesFromFirestore
  }
)

interface InitialState {
  categories: Category[]
  isLoading: boolean
}

const initialState: InitialState = {
  categories: [],
  isLoading: false
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchCategories.rejected, (state) => {
      state.isLoading = false
    })
  }
})

export default categorySlice.reducer
