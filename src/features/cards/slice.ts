import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getCards } from "./api";

export type Card = {
  id: string;
  name: string;
  imageLink: string;
  liked: boolean;
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
  reducers: {
    likeToggle: (state, action: PayloadAction<string>) => {
      let likedElement = state.products.findIndex(
        (p) => p.id === action.payload
      );
      state.products[likedElement].liked = !state.products[likedElement].liked;
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCards.fulfilled, (state, { payload }) => {
      state.products.push(...payload);
    });
  },
});
export const { likeToggle, deleteCard } = cardsSlice.actions;

export const selectCards = (state: RootState) => state.cards.products;

export default cardsSlice.reducer;
