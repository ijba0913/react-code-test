import { ACTION_LOADING, ACTION_SUCCESS, ACTION_ERROR } from '../constants'

const INITIAL_STATE = {
  pages: [],
  success: false,
  loading: false,
  error: false,
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_LOADING:
      return {
        ...state,
        pages: [],
        success: false,
        loading: true,
        error: false
      }
    case ACTION_SUCCESS:
      return {
        ...state,
        pages: payload,
        success: true,
        loading: false,
        error: false
      }
    case ACTION_ERROR:
      return {
        ...state,
        pages: [],
        success: false,
        loading: false,
        error: true
      }
    default:
      return state
  }
}
