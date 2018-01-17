import React from 'react'
import numeral from 'numeral'
import { arrayOf, shape, string } from 'prop-types'

import style from './AthleteRow.scss'

function Rank (props) {
  return numeral(props.children).format('0o')
}

function AthleteRow (props) {
  const { rank, picture, name, region, points, workouts } = props

  return (
    <div className={style.wrapper}>
      <div className={style.rank}>
        <div className={style.value}>{rank}</div>
      </div>
      <div className={style.picture}>
        <img src={picture} />
      </div>
      <div className={style.name}>{name}</div>
      <div className={style.region}>{region}</div>
      <div className={style.points}>{points}</div>
      {workouts.map((workout, index) => (
        <div className={style.workout} key={index}>
          <Rank>{workout.rank}</Rank>
          <div className={style.score}>&nbsp;({workout.score})</div>
        </div>
      ))}
    </div>
  )
}

AthleteRow.propTypes = {
  rank: string,
  picture: string,
  name: string,
  region: string,
  points: string,
  workouts: arrayOf(
    shape({
      rank: string,
      score: string
    })
  )
}

AthleteRow.defaultProps = {
  workouts: []
}

export default AthleteRow
