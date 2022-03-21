const initialState = {
  orders: [],
}

export function reviewReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_REVIEWS':
      return { ...state, orders: action.orders }
    case 'ADD_REVIEW':
      return { ...state, orders: [...state.reviews, action.order] }
    // case 'REMOVE_REVIEW':
    //   return { ...state, reviews: state.reviews.filter(review => review._id !== action.reviewId) }
    // case 'UPDATE_REVIEW':
    //   return {
    //     ...state,
    //     reviews: state.reviews.map(review =>
    //       review._id === action.review._id ? action.review : review
    //     )}
    default:
      return state
  }
}