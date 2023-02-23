import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import CardsReducer from "./slices/cards/slice";

export const store = configureStore({
  reducer: {
    cards: CardsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
