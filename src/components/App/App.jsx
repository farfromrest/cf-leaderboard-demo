import React from 'react'
import { number, func } from 'prop-types'

import Filters from 'components/Filters/Filters'
import Leaderboard from 'containers/Leaderboard/Leaderboard'
import 'stylesheets/reset.scss'
import 'stylesheets/base.scss'
import style from './App.scss'

function App (props) {
  return (
    <div className={style.wrapper}>
      <Filters
        onShowMen={props.onShowMen}
        onShowWomen={props.onShowWomen}
        division={props.division}
      />
      <Leaderboard division={props.division} />
    </div>
  )
}

App.propTypes = {
  division: number,
  onShowMen: func,
  onShowWomen: func
}

export default App
