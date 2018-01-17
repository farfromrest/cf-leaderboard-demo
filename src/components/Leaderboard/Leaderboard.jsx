import React from 'react'
import { arrayOf, shape, string } from 'prop-types'

import Header from './Header/Header'
import AthleteRow from './AthleteRow/AthleteRow'
import style from './Leaderboard.scss'

function Leaderboard (props) {
  const { athletes } = props

  return (
    <div className={style.wrapper}>
      <Header />
      {athletes.map(athlete => <AthleteRow key={athlete.id} {...athlete} />)}
    </div>
  )
}

Leaderboard.propTypes = {
  athletes: arrayOf(
    shape({
      id: string
    })
  )
}

export default Leaderboard
