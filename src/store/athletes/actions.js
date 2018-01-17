import { normalize } from 'normalizr'

import { FETCHED_ATHLETES } from './action-types'
import * as schema from 'store/schema'

export function getAthletes () {
  return (dispatch, getState, api) => {
    api
      .fetchAthletes()
      .then(response => {
        return normalize(response.data.athletes, [schema.athlete])
      })
      .then(athletes => {
        return dispatch({
          type: FETCHED_ATHLETES,
          payload: athletes
        })
      })
  }
}
