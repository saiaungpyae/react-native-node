import { createSlice } from "@reduxjs/toolkit";

// Slice

const initialState = {
  open: false,
  message: "",
};

const slice = createSlice({
  name: "snackbar",
  initialState: {
    snackbar: initialState,
  },
  reducers: {
    toggleSnackBar: (state, action) => {
      state.snackbar = action.payload;
    },
  },
});

export default slice.reducer;

// Actions

const { toggleSnackBar } = slice.actions;

export const setSnackBarState =
  ({ open, message = "" }: { open: boolean; message?: string }) =>
  async (dispatch) => {
    try {
      dispatch(toggleSnackBar({ open, message }));
    } catch (e) {
      return console.error(e.message);
    }
  };
