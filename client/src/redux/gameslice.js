import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getgames = createAsyncThunk("games/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/game/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addgames = createAsyncThunk("games/add", async (game) => {
  try {
    let result = axios.post("http://localhost:5000/game/add", game);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const deletegames = createAsyncThunk("games/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/game/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const editgames = createAsyncThunk(
  "games/edit",
  async ({ id, edited }) => {
    try {
      let result = axios.put(`http://localhost:5000/game/${id}`, edited);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  gameslist: null,
  status: null,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: {
    [getgames.pending]: (state) => {
      state.status = "pending";
    },
    [getgames.fulfilled]: (state, action) => {
      state.status = "success";
      state.gameslist = action.payload.data.games;
    },
    [getgames.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [addgames.pending]: (state) => {
      state.status = "pending";
    },
    [addgames.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addgames.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [deletegames.pending]: (state) => {
      state.status = "pending";
    },
    [deletegames.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deletegames.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [editgames.pending]: (state) => {
      state.status = "pending";
    },
    [editgames.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editgames.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default gameSlice.reducer;
