import { configureStore } from '@reduxjs/toolkit';

import docsUploadReducer from './docsUploadSlice';

export const store = configureStore({
  reducer: {
    docsUpload: docsUploadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
