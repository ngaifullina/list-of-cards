import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
// @ts-ignore
import * as randomSentence from "random-sentence";

export type Event = {
  name: string;
  timestamp: number; // Date.now() format
};

export type EventsState = {
  events: Event[];
  readCount: number;
  popoverOpen: boolean;
};

const initialState: EventsState = {
  events: [],
  readCount: 0,
  popoverOpen: false,
};

const AUTO_EVENT_WORDS_COUNT = 5;

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<string>) => {
      state.events.unshift({ name: action.payload, timestamp: Date.now() });
    },
    deleteEvents: (state) => {
      state.events = [];
      state.readCount = 0;
    },
    markEventsRead: (state) => {
      state.readCount = state.events.length;
    },
    loadRandomSentence: (state) => {
      state.events.unshift({
        name: randomSentence({ words: AUTO_EVENT_WORDS_COUNT }),
        timestamp: Date.now(),
      });
    },
    togglePopover: (state) => {
      state.popoverOpen = !state.popoverOpen;
    },
  },
});

export const {
  addEvent,
  deleteEvents,
  markEventsRead,
  loadRandomSentence,
  togglePopover,
} = eventsSlice.actions;

export const selectEvents = (state: RootState) => state.events.events;

export const selectReadCount = (state: RootState) => state.events.readCount;

export const showPopoverOpen = (state: RootState) => state.events.popoverOpen;

export default eventsSlice.reducer;
