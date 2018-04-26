import PropTypes from 'prop-types'
import styled from 'styled-components'
import { unit } from '../utils'

const alignments = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end'
}

const Distribute = styled.div`
  display: flex;
  flex-direction: ${props => props.vertical ? 'column' : 'row'};
  ${props => props.inline && 'display: inline-flex'};

  ${props => `align-items: ${alignments[props.align]}`};

  & > *:not(:last-child) {
    ${props => props.vertical
    ? `margin-bottom: ${unit(props.space)}`
    : `margin-right: ${unit(props.space)}`};
  }
`
Distribute.displayName = 'Distribute'

export const availableAlignments = Object.keys(alignments)

Distribute.defaultProps = {
  align: 'flex-start'
}

Distribute.propTypes = {
  space: PropTypes.number,
  align: PropTypes.oneOf(availableAlignments),
  vertical: PropTypes.bool,
  inline: PropTypes.bool
}

export default Distribute
