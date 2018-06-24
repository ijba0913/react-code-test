import { ACTION_LOADING, ACTION_SUCCESS, ACTION_ERROR } from '../constants'

export const getListOfUsers = page =>
  async dispatch => {
    dispatch({ type: ACTION_LOADING })
    try {
      const query = await fetch(`https://reqres.in/api/users?page=${page}`)
      const result = await query.json()
      dispatch({
        type: ACTION_SUCCESS,
        payload: result
      })
    } catch (e) {
      dispatch({ type: ACTION_ERROR })
    }
  }
