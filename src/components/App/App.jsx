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
      <Leaderboard
        division={props.division}
        page={props.page}
        onLoadMore={props.onLoadMore}
      />
    </div>
  )
}

App.propTypes = {
  division: number,
  page: number,
  onShowMen: func,
  onShowWomen: func,
  onLoadMore: func
}

export default App
