import styled from 'styled-components'
import gridSvg from './grid.svg'

const DemoGrid = styled.div`
  ${props => props.withGrid && `
    background-image: url(${gridSvg});
  `}

  * {
    ${props => props.withGrid && `
      box-shadow: inset 0 0 0 1px rgba(111,148,194,.2) !important;
      background-color: rgba(111,148,194,.02) !important;
      color: rgba(111,148,194,1) !important;
      border-color: rgba(111,148,194,.5) !important;
      fill: rgba(111,148,194,1) !important;
    `}
  }
`

DemoGrid.displayName = 'DemoGrid'

DemoGrid.defaultProps = {
  withGrid: false
}

export default DemoGrid
