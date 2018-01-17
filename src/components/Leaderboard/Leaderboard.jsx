import React from 'react'
import { arrayOf, shape, string, bool } from 'prop-types'

import Loader from 'components/Loader/Loader'
import Header from './Header/Header'
import AthleteRow from './AthleteRow/AthleteRow'
import style from './Leaderboard.scss'

function Leaderboard (props) {
  const { isLoading, athletes } = props

  return (
    <div className={style.wrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        [
          <Header key='header' />,
          athletes.map(athlete => <AthleteRow key={athlete.id} {...athlete} />)
        ]
      )}
    </div>
  )
}

Leaderboard.propTypes = {
  isLoading: bool,
  athletes: arrayOf(
    shape({
      id: string
    })
  )
}

export default Leaderboard
