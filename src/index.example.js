import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import Index from './index'

const stories = storiesOf('Index', module)
stories.addDecorator(withKnobs).add('default', () => <Index />)
