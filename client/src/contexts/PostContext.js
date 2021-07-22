import { createContext, useReducer, useState } from "react";
import { postReducer } from "../reducers/postReducer";
import { apiUrl, POSTS_LOADED_FAILED, POSTS_LOADED_SUCCESS } from "./constants";
import axios from "axios";

export const PostContext = createContext();
const PostContextProvider = ({ children }) => {
  //State
  const [postState, dispatch] = useReducer(postReducer, {
    posts: [],
    postLoading: true,
  });
  const [showAddPostModal, setShowAddPostModal] = useState(false);
  console.log(setShowAddPostModal);
  //Get all posts from server
  const getPosts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/post`);

      if (response.data.success) {
        dispatch({
          type: POSTS_LOADED_SUCCESS,
          payload: response.data.posts,
        });
      }
    } catch (error) {
      dispatch({
        type: POSTS_LOADED_FAILED,
      });
    }
  };
  const postContextData = {
    postState,
    getPosts,
    showAddPostModal,
    setShowAddPostModal,
  };

  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  );
};
export default PostContextProvider;
