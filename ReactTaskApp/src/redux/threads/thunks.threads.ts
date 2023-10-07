import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiEndPints} from '../../constants/api.services';

const {threads} = apiEndPints;

export const fetchThreads = createAsyncThunk('threads/getThreads', async () => {
  const res = await fetch(threads);
  const data = await res.json();
  return data?.body;
});

export const postThread = createAsyncThunk(
  'threads/postThread',
  async (_, {getState}) => {
    try {
      const state: any = getState();
      const inputThread = state.threadsReducer.inputThread;

      const res = await fetch(threads, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputThread),
      });
      const data = await res.json();
      return data?.body;
    } catch (error) {
      console.error('error', error);

      return null;
    }
  },
);
