import React from "react";

export const postReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "POSTS_LOADED_SUCCESS":
      return {
        ...state,
        posts: payload,
        postsLoading: false,
      };
    default:
      return state;
      break;
  }
};
