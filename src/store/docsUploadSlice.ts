import { createSlice } from '@reduxjs/toolkit';

interface DocsUploadState {
  fields: { [key: string]: boolean };
}

const initialState: DocsUploadState = {
  fields: {},
};


export const docsUploadSlice = createSlice({
  name: 'docsUpload',
  initialState,
  reducers: {
    uploadDocument: (state, action) => {
      const id: string = action.payload.id;
      state.fields[id] = true;
      console.log('state.fields', state.fields);
    },
  },
});

export const { uploadDocument: updateDocument } = docsUploadSlice.actions;

export default docsUploadSlice.reducer;
