import React from 'react'
import classNames from 'classnames'
import { string, func, node } from 'prop-types'

import style from './Button.scss'

function Button (props) {
  return (
    <button
      onClick={props.onClick}
      className={classNames(style.wrapper, props.className)}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: node,
  className: string,
  onClick: func
}

export default Button
