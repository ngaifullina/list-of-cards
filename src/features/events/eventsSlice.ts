import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export type Event = {
  name: string;
  timestamp: number; // Date.now() format
};

export type EventsState = {
  events: Event[];
};

const initialState: EventsState = {
  events: [{ name: "initial event", timestamp: 1632133494000 }],
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<string>) => {
      state.events.unshift({ name: action.payload, timestamp: Date.now() });
    },
  },
});

export const { addEvent } = eventsSlice.actions;

export const selectEvents = (state: RootState) => state.events.events;

export default eventsSlice.reducer;
