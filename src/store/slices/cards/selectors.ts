import { RootState } from "../../";

export const selectCards = (state: RootState) => state.cards.cards;

export const selectByLikes = (state: RootState) =>
  state.cards.cards.filter((obj) => obj.likes > 0);
