import React from 'react'
import { connect } from 'react-redux'
import { number, func, array } from 'prop-types'

import Leaderboard from 'components/Leaderboard/Leaderboard'
import { getAthletes } from 'store/athletes/actions'
import { athletesSelector } from 'store/athletes/selectors'

class LeaderboardContainer extends React.Component {
  static propTypes = {
    division: number,
    page: number,
    getAthletes: func,
    onLoadMore: func,
    athletes: array
  }

  state = {
    isLoading: true,
    isLoadingMore: false,
    page: 1
  }

  componentDidMount () {
    const { division } = this.props
    this.fetchAthletes({ division })
  }

  componentWillReceiveProps (nextProps) {
    const { division, page } = nextProps

    if (this.props.division !== division) {
      this.fetchAthletes({ division, page })
    } else if (this.props.page !== page) {
      this.fetchMoreAthletes({ division, page })
    }
  }

  fetchAthletes = options => {
    this.setState({ isLoading: true })
    this.props.getAthletes(options).then(() => {
      this.setState({ isLoading: false })
    })
  }

  fetchMoreAthletes = options => {
    this.setState({ isLoadingMore: true })
    this.props.getAthletes(options).then(() => {
      this.setState({ isLoadingMore: false })
    })
  }

  render () {
    return (
      <Leaderboard
        athletes={this.props.athletes}
        isLoading={this.state.isLoading}
        isLoadingMore={this.state.isLoadingMore}
        onLoadMore={this.props.onLoadMore}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    athletes: athletesSelector(state)
  }
}

export default connect(mapStateToProps, { getAthletes })(LeaderboardContainer)
