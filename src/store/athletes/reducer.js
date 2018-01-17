import { FETCHED_ATHLETES, FETCHED_MORE_ATHLETES } from './action-types'

export default function reduce (
  state = { entities: {}, result: [] },
  action = {}
) {
  switch (action.type) {
    case FETCHED_ATHLETES:
      return {
        entities: { ...action.payload.entities.athletes },
        result: [...action.payload.result]
      }
    case FETCHED_MORE_ATHLETES:
      return {
        entities: { ...state.entities, ...action.payload.entities.athletes },
        result: [...state.result, ...action.payload.result]
      }
    default:
      return state
  }
}
