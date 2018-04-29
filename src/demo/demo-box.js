import styled from 'styled-components'

const DemoBox = styled.div`
  ${props => props.size === 'sm' && 'width: 64px; height: 64px'};
  ${props => props.size === 'md' && 'width: 128px; height: 64px'};
  ${props => props.size === 'lg' && 'width: 128px; height: 128px'};
  ${props => props.width && `width: ${props.width}`};
  ${props => props.height && `height: ${props.height}`};
  background-color: #444;
  border-radius: 3px;
  display: inline-block;
`

export default DemoBox
