import React from 'react'

import Leaderboard from 'containers/Leaderboard/Leaderboard'
import 'stylesheets/reset.scss'
import 'stylesheets/base.scss'
import style from './App.scss'

function App () {
  return (
    <div className={style.wrapper}>
      <Leaderboard />
    </div>
  )
}

export default App
