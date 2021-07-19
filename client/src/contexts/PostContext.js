import { createContext, useReducer } from "react";
import { postReducer } from "../reducers/postReducer";
import { apiUrl } from "./constants";
import axios from "axios";
export const PostContext = createContext();
const PostContextProvider = ({ children }) => {
  //State
  const [postState, dispatch] = useReducer(postReducer, {
    post: [],
    postLoading: true,
  });
  //Get all posts from server
  const getPosts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/post`);
      if (response.data.success) {
        dispatch({
          type: "POSTS_LOADED_SUCCESS",
          payload: response.data.posts,
        });
      }
    } catch (error) {
      dispatch({
        type: "POSTS_LOADED_FAILED",
        payload: [],
      });
    }
  };
  const postContextData = { postState, getPosts };

  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  );
};
export default PostContextProvider;
