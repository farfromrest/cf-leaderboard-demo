import { FETCHED_ATHLETES } from './action-types'

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
    default:
      return state
  }
}
