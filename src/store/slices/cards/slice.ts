import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { getPromise } from "../../../utils/getPromise";
import { cards } from "./types";

export const fetchCard = createAsyncThunk("card/fetchCardStatus", async () => {
  return Promise.all(getPromise()).then((response) => {
    return response.map((value) => value.data);
  });
});

const initialState: { cards: cards[] } = {
  cards: [],
};

export const userSlice = createSlice({
  name: "Card",
  initialState,
  reducers: {
    addLike: (state, action: PayloadAction<number>) => {
      const findCard = state.cards.find((obj) => obj.id == action.payload);

      if (findCard) findCard.likes > 0 ? findCard.likes-- : findCard.likes++;
    },
    removeCard: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter((obj) => obj.id != action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCard.fulfilled, (state, action) => {
      state.cards = action.payload.map((obj, i) => ({
        ...obj,
        id: i,
        likes: 0,
      }));
    });
  },
});

export const { addLike, removeCard } = userSlice.actions;

export default userSlice.reducer;
