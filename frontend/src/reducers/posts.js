// const postData = {
//     posts: [],
//     currentPostId: null
// }

const postReducer = (
  postData = {
    posts: [],
    currentPostId: null,
  },
  action
) => {
  switch (action.type) {
    case "FETCH_ALL":
      return { ...postData, posts: action.payload };
    case "CREATE":
      return { ...postData, posts: [...postData.posts, action.payload] };
    case "UPDATE":
      return { ...postData, posts: postData.posts.map((post) => post._id === action.payload._id ? action.payload : post)};
    case "SET_CURRENT_POST_ID":
      return { ...postData, currentPostId: action.payload };
    default:
      return postData;
  }
};

export default postReducer