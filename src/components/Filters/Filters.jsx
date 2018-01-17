import React from 'react'
import classNames from 'classnames'
import { func, number } from 'prop-types'

import style from './Filters.scss'

function Filters (props) {
  const { division, onShowMen, onShowWomen } = props

  return (
    <div className={style.wrapper}>
      <button
        onClick={onShowMen}
        className={classNames(style.button, { [style.active]: division === 1 })}
      >
        Men
      </button>
      <button
        onClick={onShowWomen}
        className={classNames(style.button, { [style.active]: division === 2 })}
      >
        Women
      </button>
    </div>
  )
}

Filters.propTypes = {
  division: number,
  onShowMen: func,
  onShowWomen: func
}

export default Filters
