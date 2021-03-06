import React from 'react'
import { arrayOf, shape, string, bool, func } from 'prop-types'

import Loader from 'components/Loader/Loader'
import Header from './Header/Header'
import AthleteRow from './AthleteRow/AthleteRow'
import Button from 'components/Button/Button'
import style from './Leaderboard.scss'

function Leaderboard (props) {
  const { isLoading, isLoadingMore, onLoadMore, athletes } = props

  let loadMore

  if (!isLoading) {
    if (isLoadingMore) {
      loadMore = <Loader />
    } else {
      loadMore = (
        <Button onClick={onLoadMore} className={style.button}>
          Load More
        </Button>
      )
    }
  }

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

      {loadMore}
    </div>
  )
}

Leaderboard.propTypes = {
  isLoading: bool,
  isLoadingMore: bool,
  onLoadMore: func,
  athletes: arrayOf(
    shape({
      id: string
    })
  )
}

export default Leaderboard
