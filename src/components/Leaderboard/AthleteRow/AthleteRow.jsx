import React from 'react'
import classNames from 'classnames'
import { arrayOf, shape, string } from 'prop-types'

import Number from 'components/Number/Number'
import style from './AthleteRow.scss'

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
      <div className={style.points}>
        <div className={style.label}>Points</div>
        <div className={style.innerValue}>
          <Number format='0,0'>{points}</Number>
        </div>
      </div>
      {workouts.map((workout, index) => (
        <div
          className={classNames(style.workout, style[`workout${index + 1}`])}
          key={index}
        >
          <div className={style.label}>17.{index + 1}</div>
          <div className={style.innerValue}>
            <Number format='0o'>{workout.rank}</Number>
            <div className={style.score}>{workout.score}</div>
          </div>
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
