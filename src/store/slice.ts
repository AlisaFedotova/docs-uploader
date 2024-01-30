import { createSlice } from '@reduxjs/toolkit';

export const docsUploadSlice = createSlice({
  name: 'docsUpload',
  initialState: {
    firstDocument: undefined,
    secondDocument: undefined,
    thirdDocument: undefined,
  },
  reducers: {
    updateFirstDocument: (state, action) => {
      state.firstDocument = action.payload;
    },
    updateSecondDocument: (state, action) => {
      state.secondDocument = action.payload;
    },
  },
});

export const { updateFirstDocument, updateSecondDocument } =
  docsUploadSlice.actions;

export default docsUploadSlice.reducer;
