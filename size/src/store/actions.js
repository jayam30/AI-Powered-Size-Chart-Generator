export const GET_SIZE_RECOMMENDATION = 'GET_SIZE_RECOMMENDATION';
export const SET_LOADING = 'SET_LOADING';

export const getSizeRecommendation = (sizeData) => {
  return {
    type: GET_SIZE_RECOMMENDATION,
    payload: sizeData,
  };
};

export const setLoading = (isLoading) => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
};
