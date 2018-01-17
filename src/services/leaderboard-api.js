import axios from 'axios'

const URL =
  'https://games.crossfit.com/competitions/api/v1/competitions/open/2017/leaderboards'

class LeaderboadApi {
  fetchAthletes (options) {
    const { division, page = 1 } = options

    return axios.get(URL, {
      params: {
        division,
        page,
        scaled: 0,
        sort: 0,
        fittest: 1,
        fittest1: 0,
        occupation: 0
      }
    })
  }
}

export default new LeaderboadApi()
