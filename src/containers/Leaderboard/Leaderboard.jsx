import React from 'react'
import { connect } from 'react-redux'
import { func, array } from 'prop-types'

import Leaderboard from 'components/Leaderboard/Leaderboard'
import { getAthletes } from 'store/athletes/actions'
import { athletesSelector } from 'store/athletes/selectors'

class LeaderboardContainer extends React.Component {
  static propTypes = {
    getAthletes: func,
    athletes: array
  }

  componentDidMount () {
    this.props.getAthletes()
  }

  render () {
    return <Leaderboard athletes={this.props.athletes} />
  }
}

function mapStateToProps (state) {
  return {
    athletes: athletesSelector(state)
  }
}

export default connect(mapStateToProps, { getAthletes })(LeaderboardContainer)
