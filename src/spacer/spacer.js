import PropTypes from 'prop-types'
import styled from 'styled-components'
import { unit } from '../utils'

const Spacer = styled.div`
  ${props => props.top && `margin-top: ${unit(props.top)}`};
  ${props => props.bottom && `margin-bottom: ${unit(props.bottom)}`};
  ${props => props.left && `margin-left: ${unit(props.left)}`};
  ${props => props.right && `margin-right: ${unit(props.right)}`};
  ${props => props.inline && 'display: inline-block'};
`
Spacer.displayName = 'Spacer'

Spacer.propTypes = {
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  inline: PropTypes.bool
}

export default Spacer
