import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getCards } from "./api";

export type Card = {
  id: string;
  name: string;
  imageLink: string;
};

export type State = {
  products: Card[];
};

const initialState: State = {
  products: [],
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCards.fulfilled, (state, { payload }) => {
      state.products.push(...payload);
    });
  },
});

// export const { addEvent, deleteEvents, markEventsRead, togglePopover } =
//   eventsSlice.actions;

export const selectCards = (state: RootState) => state.cards.products;

export default cardsSlice.reducer;
