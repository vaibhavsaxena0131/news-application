import {
  CLEAR_BLOG,
  CREATE_A_NEW_BLOG,
  DELETE_SINGLE_BLOG,
  FETCH_ALL_BLOG,
  FETCH_SINGLE_BLOG,
  SET_BLOG,
  UPDATE_SINGLE_BLOG,
} from "../actions/actionsType";

const init = {
  allBlogs: {
    rows: [],
    count: 1,
  },
  blogDetails: {
    title: "",
    description: "",
    author: "Anonymous",
    location_category: "",
    category: "",
    media: "",
    location_sub_category: "",
    published: "yes",
    content: {},
    blog_type: "news",
  },
  error: "",
  successMessage: "",
  errorMessage: "",
};

const blogReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    // Fetch All Blogs Success
    case `${FETCH_ALL_BLOG}_SUCCESS`:
      return { ...state, allBlogs: payload, error: "", successMessage: "" };

    // Create a New Blog Success
    case `${CREATE_A_NEW_BLOG}_SUCCESS`:
      return {
        ...init,
        successMessage: "Blog created successfully!",
        errorMessage: "",
      };

    // Set Blog or Fetch Single Blog Success
    case SET_BLOG:
    case `${FETCH_SINGLE_BLOG}_SUCCESS`:
      return {
        ...state,
        blogDetails: { ...state.blogDetails, ...payload },
        error: "",
        successMessage: "",
      };

    // Update Blog Success
    case `${UPDATE_SINGLE_BLOG}_SUCCESS`:
      return {
        ...state,
        successMessage: "Blog updated successfully!",
        errorMessage: "",
      };

    // Delete Blog Success
    case `${DELETE_SINGLE_BLOG}_SUCCESS`:
      return {
        ...state,
        allBlogs: {
          ...state.allBlogs,
          count: state.allBlogs.count - 1,
          rows: state.allBlogs.rows.filter((blog) => blog.id !== payload.id),
        },
        successMessage: "Blog deleted successfully!",
        errorMessage: "",
      };

    // Fetch All Blogs Error, Fetch Single Blog Error, Create Blog Error
    case `${FETCH_ALL_BLOG}_ERROR`:
    case `${FETCH_SINGLE_BLOG}_ERROR`:
    case `${CREATE_A_NEW_BLOG}_ERROR`:
    case `${UPDATE_SINGLE_BLOG}_ERROR`:
    case `${DELETE_SINGLE_BLOG}_ERROR`:
      return {
        ...state,
        error: payload,
        successMessage: "",
        errorMessage:
          payload.message || payload || "An error occurred, please try again.",
      };

    // Clear Blog State
    case CLEAR_BLOG:
      return { ...init };

    default:
      return state;
  }
};

export default blogReducer;
