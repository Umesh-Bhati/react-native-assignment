import {createSlice} from '@reduxjs/toolkit';
import {IThread} from '../../types/models';
import {fetchThreads, postThread} from './thunks.threads';

interface IThreadsState {
  threads: IThread[];
  isLoading: boolean;
  inputThread: IThread;
  error?: string | null;
}

const initialState: IThreadsState = {
  threads: [],
  inputThread: {
    userName: 'Umesh Bhati',
    caption: '',
    tags: [],
    isVerified: true,
  },
  isLoading: false,
  error: '',
};

export const threadsSlice = createSlice({
  name: 'threads',
  initialState,
  reducers: {
    updateCaption: (state, {payload}) => {
      state.inputThread.caption = payload;
    },
    updateTags: (state, {payload}) => {
      state.inputThread.tags = [payload, ...state.inputThread.tags];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchThreads.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchThreads.fulfilled, (state, action) => {
      state.isLoading = false;
      state.threads = action.payload;
    });
    builder.addCase(fetchThreads.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(postThread.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(postThread.fulfilled, (state, action) => {
      state.isLoading = false;
      state.threads = [action.payload, ...state.threads];
      state.inputThread = initialState.inputThread;
    });
    builder.addCase(postThread.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const threadsReducer = threadsSlice.reducer;
export const {updateCaption, updateTags} = threadsSlice.actions;
