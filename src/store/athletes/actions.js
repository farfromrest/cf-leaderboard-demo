import { normalize } from 'normalizr'

import { FETCHED_ATHLETES, FETCHED_MORE_ATHLETES } from './action-types'
import * as schema from 'store/schema'

export function getAthletes (options) {
  return (dispatch, getState, api) => {
    return api
      .fetchAthletes(options)
      .then(response => {
        return normalize(response.data.athletes, [schema.athlete])
      })
      .then(response => {
        const type =
          options.page === 1 ? FETCHED_ATHLETES : FETCHED_MORE_ATHLETES
        return dispatch({
          type,
          payload: {
            entities: response.entities.athletes,
            result: response.result
          }
        })
      })
  }
}
