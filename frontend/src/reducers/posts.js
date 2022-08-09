import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  SET_CURRENT_POST_ID,
} from "../constants/actionTypes";

const postReducer = (
  postData = {
    posts: [],
    currentPostId: null,
  },
  action
) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...postData, posts: action.payload };
    case CREATE:
      return { ...postData, posts: [...postData.posts, action.payload] };
    case UPDATE:
      return {
        ...postData,
        posts: postData.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE:
      return {
        ...postData,
        posts: postData.posts.filter((post) =>
          post._id !== action.payload
        ),
      };
    case SET_CURRENT_POST_ID:
      return { ...postData, currentPostId: action.payload };
    default:
      return postData;
  }
};

export default postReducer