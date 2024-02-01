import { createSlice } from '@reduxjs/toolkit';

export const docsUploadSlice = createSlice({
  name: 'docsUpload',
  initialState: { fields: new Array<string>() },
  reducers: {
    uploadDocument: (state, action) => {
      state.fields.push(action.payload);
    },
  },
});

export const { uploadDocument: updateDocument } = docsUploadSlice.actions;

export default docsUploadSlice.reducer;
