import { GET_SIZE_RECOMMENDATION, SET_LOADING } from './actions';

const initialState = {
  sizeData: null,
  loading: false,
};

const sizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SIZE_RECOMMENDATION:
      return { ...state, sizeData: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default sizeReducer;
