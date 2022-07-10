import { createSlice } from "@reduxjs/toolkit";

// Slice

const initialState = {
  open: true,
};

const slice = createSlice({
  name: "camera",
  initialState: {
    camera: initialState,
  },
  reducers: {
    toggleCamera: (state, action) => {
      state.camera = action.payload;
    },
  },
});

export default slice.reducer;

// Actions

const { toggleCamera } = slice.actions;

export const setCameraState = (open: boolean) => async (dispatch) => {
  try {
    dispatch(toggleCamera({ open: open }));
  } catch (e) {
    return console.error(e.message);
  }
};
