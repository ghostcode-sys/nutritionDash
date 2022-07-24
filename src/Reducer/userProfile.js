import { createSlice } from "@reduxjs/toolkit";
import user from "../user.json";
const userProfile = createSlice({
  name: "userProfile",
  initialState: { user },
  reducers: {
    incrementStepTarget: (state, action) => {
      const arr = state.user.map((element) => {
        if (action.payload.userId === element.userId) {
          element = { ...element, stepsTarget: element.stepsTarget + 500 };
          return element;
        } else {
          return element;
        }
      });
      state.user = [...arr];
    },
    decrementStepTarget: (state, action) => {
      const arr = state.user.map((element) => {
        if (action.payload.userId === element.userId) {
          element = { ...element, stepsTarget: element.stepsTarget - 500 };
          return element;
        } else {
          return element;
        }
      });
      state.user = [...arr];
    },
    incrementCalories: (state, action) => {
      const arr = state.user.map((element) => {
        if (action.payload.userId === element.userId) {
          element = { ...element, calorieTarget: element.calorieTarget + 100 };
          return element;
        } else {
          return element;
        }
      });
      state.user = [...arr];
    },
    decrementCalories: (state, action) => {
      const arr = state.user.map((element) => {
        if (action.payload.userId === element.userId) {
          element = { ...element, calorieTarget: element.calorieTarget - 100 };
          return element;
        } else {
          return element;
        }
      });
      state.user = [...arr];
    },
  },
});

export const {
  incrementStepTarget,
  decrementStepTarget,
  incrementCalories,
  decrementCalories,
} = userProfile.actions;
export default userProfile.reducer;
