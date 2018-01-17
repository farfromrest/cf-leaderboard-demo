import React from 'react'

import style from './Header.scss'

function Header () {
  return (
    <div className={style.wrapper}>
      <div className={style.rank}>Rank</div>
      <div className={style.athlete}>Athlete</div>
      <div className={style.points}>Points</div>
      <div className={style.points}>17.1</div>
      <div className={style.points}>17.2</div>
      <div className={style.points}>17.3</div>
      <div className={style.points}>17.4</div>
      <div className={style.points}>17.5</div>
    </div>
  )
}

export default Header
