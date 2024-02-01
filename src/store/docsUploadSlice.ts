import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DocsUploadState {
  fields: Array<string>;
}

export const docsUploadSlice = createSlice({
  name: 'docsUpload',
  initialState: { fields: [] },
  reducers: {
    uploadDocument: (state: DocsUploadState, action: PayloadAction<string>) => {
      state.fields.push(action.payload);
    },
  },
});

export const { uploadDocument: updateDocument } = docsUploadSlice.actions;

export default docsUploadSlice.reducer;
