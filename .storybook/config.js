import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import styled, { injectGlobal } from 'styled-components'
import DemoGrid from '../src/demo/demo-grid'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`

const StoryWrapper = styled.div`
  position: relative;
`
const GridToggle = styled.div`
  width: 32px;
  height: 32px;
  position: fixed;
  right: 0;
  top: 0;
  cursor: pointer;
  box-sizing: border-box;
  padding-top: 7px;

  &:not(:hover) {
    opacity: 0;
  }

  &:after {
    content: '';
    width: 1px;
    height: 32px;
    background-color: rgba(111,148,194,1);
    display: block;
    margin-top: -8px;
    margin-left: 8px;
    box-shadow: 16px 0 rgba(111,148,194,1);
  }
  &:before {
    content: '';
    width: 32px;
    height: 1px;
    background-color: rgba(111,148,194,1);
    display: block;
    box-shadow: 0 16px rgba(111,148,194,1);
  }
`
const StoryContainer = styled.div`
  padding: 0;

  .StoryLayout {
    margin: -32px;
  }
`

class Story extends React.Component {
  constructor (props) {
    super(props)
    this.state = {gridVisible: window.parent.gridVisible}
    this.handleToggleGrid = this.handleToggleGrid.bind(this)
  }

  handleToggleGrid () {
    window.parent.gridVisible = !this.state.gridVisible
    this.setState({
      gridVisible: !this.state.gridVisible
    })
  }

  render () {
    return (
      <StoryWrapper>
        <GridToggle onClick={() => this.handleToggleGrid()} />

        <DemoGrid withGrid={this.state.gridVisible}>
          <div>
            <StoryContainer>
              {this.props.story()}
            </StoryContainer>
          </div>
        </DemoGrid>
      </StoryWrapper>
    )
  }
}

const req = require.context('../src/', true, /\.example.js$/)

function loadStories () {
  req.keys().forEach(req)
}

addDecorator(story => (
  <Story story={story} />
))

setOptions({
  name: '',
  url: '',
  downPanelInRight: true,
  sortStoriesByKind: true
})

configure(loadStories, module)
