import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, number, boolean } from '@storybook/addon-knobs/react'
import Spacer from './spacer'
import DemoBox from '../demo/demo-box'

const stories = storiesOf('Spacer', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <div>
    <Spacer
      top={number('top', 0)}
      bottom={number('bottom', 0)}
      left={number('left', 0)}
      right={number('right', 2)}
      inline={boolean('inline', true)}
    >
      <DemoBox size='sm' />
    </Spacer>

    <DemoBox size='md' />
  </div>
))
