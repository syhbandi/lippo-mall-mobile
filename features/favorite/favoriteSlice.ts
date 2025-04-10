import { createSlice } from "@reduxjs/toolkit";

export type FavoriteType = {
  id: string;
  name: string;
}

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [] as FavoriteType[]
  },
  reducers: {
    add(state, action) {
      state.favorites.push(action.payload);
    },
    remove(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
})

export const { add, remove } = favoriteSlice.actions;
export default favoriteSlice.reducer;