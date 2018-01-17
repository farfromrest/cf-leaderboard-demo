import React from 'react'

import App from 'components/App/App'

const MENS_DIVSION = 1
const WOMENS_DIVSION = 2

class AppContainer extends React.Component {
  state = {
    division: WOMENS_DIVSION,
    page: 1
  }

  handleShowMen = () => {
    this.setState({ division: MENS_DIVSION, page: 1 })
  }

  handleShowWomen = () => {
    this.setState({ division: WOMENS_DIVSION, page: 1 })
  }

  handleLoadMore = () => {
    this.setState(state => ({ page: state.page + 1 }))
  }

  render () {
    return (
      <App
        division={this.state.division}
        page={this.state.page}
        onShowMen={this.handleShowMen}
        onShowWomen={this.handleShowWomen}
        onLoadMore={this.handleLoadMore}
      />
    )
  }
}

export default AppContainer
