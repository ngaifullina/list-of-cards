import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type Card = {
  id: string;
  name: string;
  image_link: string;
};

export const getCards = createAsyncThunk("cards/getCards", async () => {
  const data = (
    await axios.get(
      "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush&product_tags=vegan"
    )
  ).data as Card[];

  return data.map((d) => {
    return {
      id: d.id,
      name: d.name,
      imageLink: d.image_link,
      liked: false,
    };
  });
});
