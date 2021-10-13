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
  showLiked: boolean;
};

const initialState: State = {
  products: [],
  showLiked: false,
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
    toggleShowLikedCards: (state) => {
      state.showLiked = !state.showLiked;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCards.fulfilled, (state, { payload }) => {
      state.products.push(...payload);
    });
  },
});
export const { likeToggle, deleteCard, toggleShowLikedCards } =
  cardsSlice.actions;

export const selectCards = (state: RootState) => state.cards.products;
export const selectShowLiked = (state: RootState) => state.cards.showLiked;

export default cardsSlice.reducer;
