import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export type Event = {
  name: string;
  timestamp: number; // Date.now() format
};

export type EventsState = {
  events: Event[];
  read: number;
};

const initialState: EventsState = {
  events: [
    { name: "initial event", timestamp: 1632133494000 },
    { name: "first", timestamp: 1632133494000 },
    { name: "second event", timestamp: 1632133494000 },
    { name: "very very very big event", timestamp: 1632133494000 },
  ],
  read: 0,
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<string>) => {
      state.events.unshift({ name: action.payload, timestamp: Date.now() });
    },
    deleteEvents: (state) => {
      state.events = [];
      state.read = 0;
    },
    markEventsRead: (state) => {
      state.read = state.events.length;
    },
  },
});

export const { addEvent, deleteEvents, markEventsRead } = eventsSlice.actions;

export const selectEvents = (state: RootState) => state.events.events;

export const selectRead = (state: RootState) => state.events.read;

export default eventsSlice.reducer;
