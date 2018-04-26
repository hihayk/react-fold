import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, number, select, boolean } from '@storybook/addon-knobs/react'
import Distribute, { availableAlignments } from './distribute'
import DemoBox from '../demo/demo-box'

const stories = storiesOf('Distribute', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Distribute
    space={number('space', 4)}
    align={select('align', availableAlignments, 'center')}
    vertical={boolean('vertical', false)}
    inline={boolean('inline', false)}
  >
    <DemoBox size='sm' />
    <DemoBox size='md' />
    <DemoBox size='lg' />
  </Distribute>
))
