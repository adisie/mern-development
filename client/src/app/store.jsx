import { configureStore } from '@reduxjs/toolkit'

// reducers
// notes reducer
import notesReducer from '../features/notes/notesSlice'

// store
export const store = configureStore({
    reducer: {
        notes: notesReducer,
    }
})