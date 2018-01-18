import { FETCHED_ATHLETES, FETCHED_MORE_ATHLETES } from '../action-types'
import reducer from '../reducer'

const examplePayload = {
  entities: {
    1: { name: 'test' }
  },
  result: [1]
}

const exampleMorePayload = {
  entities: {
    2: { name: 'test more' }
  },
  result: [2]
}

describe('athletes reducer', () => {
  describe('FETCHED_ATHLETES', () => {
    it('should return state with fetched athletes', () => {
      const state = reducer(null, {
        type: FETCHED_ATHLETES,
        payload: examplePayload
      })
      expect(state).toEqual(examplePayload)
    })
  })

  describe('FETCHED_ATHLETES', () => {
    it('should return state with fetched athletes and existing state', () => {
      const state = reducer(examplePayload, {
        type: FETCHED_MORE_ATHLETES,
        payload: exampleMorePayload
      })
      expect(state).toEqual({
        entities: {
          1: { name: 'test' },
          2: { name: 'test more' }
        },
        result: [1, 2]
      })
    })
  })
})
