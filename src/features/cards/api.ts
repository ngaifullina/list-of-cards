import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type Card = {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
};

export const getCards = createAsyncThunk(
  "cards/getCards",
  async () =>
    (await axios.get("https://api.imgflip.com/get_memes")).data as Card[]
);
