import { configureStore } from '@reduxjs/toolkit'

import dropdownSlice from '../redux/dropdownSlice'
import modalSlice from '../redux/modalSlice'
import usersSlice from '../redux/usersSlice'

export default configureStore({

  reducer: {
    dropdown: dropdownSlice,
    modal: modalSlice,
    users: usersSlice
  },

  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
})