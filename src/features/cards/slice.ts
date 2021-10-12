import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getCards } from "./api";

export type Card = {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
};

export type State = {
  memes: Card[];
};

const initialState: State = {
  memes: [],
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCards.fulfilled, (state, action) => {
      state.memes = action.payload;
    });
  },
});

// export const { addEvent, deleteEvents, markEventsRead, togglePopover } =
//   eventsSlice.actions;

export const selectCards = (state: RootState) => state.cards.memes;

export default cardsSlice.reducer;
