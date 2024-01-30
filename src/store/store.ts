import { configureStore } from '@reduxjs/toolkit';
import docsUploadReducer from './slice';

export const store = configureStore({
  reducer: {
    docsUpload: docsUploadReducer,
  },
});
