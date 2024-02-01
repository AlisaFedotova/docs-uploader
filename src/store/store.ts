import { configureStore } from '@reduxjs/toolkit';
import docsUploadReducer from './docsUploadSlice';

export const store = configureStore({
  reducer: {
    docsUpload: docsUploadReducer,
  },
});
