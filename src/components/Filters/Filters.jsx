import React from 'react'
import classNames from 'classnames'
import { func, number } from 'prop-types'

import Button from 'components/Button/Button'
import style from './Filters.scss'

function Filters (props) {
  const { division, onShowMen, onShowWomen } = props

  return (
    <div className={style.wrapper}>
      <Button
        onClick={onShowMen}
        className={classNames(style.button, { [style.active]: division === 1 })}
      >
        Men
      </Button>
      <Button
        onClick={onShowWomen}
        className={classNames(style.button, { [style.active]: division === 2 })}
      >
        Women
      </Button>
    </div>
  )
}

Filters.propTypes = {
  division: number,
  onShowMen: func,
  onShowWomen: func
}

export default Filters
