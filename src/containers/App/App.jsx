import React from 'react'

import App from 'components/App/App'

const MENS_DIVSION = 1
const WOMENS_DIVSION = 2

class AppContainer extends React.Component {
  state = {
    division: WOMENS_DIVSION
  }

  handleShowMen = () => {
    this.setState({ division: MENS_DIVSION })
  }

  handleShowWomen = () => {
    this.setState({ division: WOMENS_DIVSION })
  }

  render () {
    return (
      <App
        division={this.state.division}
        onShowMen={this.handleShowMen}
        onShowWomen={this.handleShowWomen}
      />
    )
  }
}

export default AppContainer
