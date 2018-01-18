import numeral from 'numeral'
import { string, node } from 'prop-types'

function Number (props) {
  return numeral(props.children).format(props.format)
}

Number.propTypes = {
  children: node,
  format: string
}

export default Number
