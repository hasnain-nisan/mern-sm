import * as api from '../api'

//action creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({
            type: 'FETCH_ALL',
            payload: data
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (postData) => async (dispatch) => {
  try {
    const { data } = await api.createPost(postData);
    dispatch({
      type: "CREATE",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const upDatePost = (id, postData) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, postData);
    dispatch({
      type: "UPDATE",
      payload: data,
    });
    dispatch({
      type: "SET_CURRENT_POST_ID",
      payload: null,
    });
  } catch (error) {
    console.log(error.message);
  }
};