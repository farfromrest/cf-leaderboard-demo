import axios from 'axios'

const URL =
  'https://games.crossfit.com/competitions/api/v1/competitions/open/2017/leaderboards'

class LeaderboadApi {
  fetchAthletes (options) {
    const { division } = options

    return axios.get(URL, {
      params: {
        division,
        scaled: 0,
        sort: 0,
        fittest: 1,
        fittest1: 0,
        occupation: 0,
        page: 1
      }
    })
  }
}

export default new LeaderboadApi()
