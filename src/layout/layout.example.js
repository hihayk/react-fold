import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import Layout from './layout'

const ExampleContent = () => (
  <div
    style={{ border: '1px solid red', background: 'pink', padding: '12px 16px' }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>
)

const ExampleContent2 = () => (
  <div
    style={{ border: '1px solid red', background: 'pink', padding: '12px 16px', lineHeight: 8 }}
  >
    A<br />
    B<br />
    C<br />
    D<br />
    E<br />
    F<br />
  </div>
)

const stories = storiesOf('Layout', module)
stories.addDecorator(withKnobs)

stories.add('with top section and sidebar', () => (
  <Layout
    width={text('widthwidt', '100%')}
    height={text('heighthei', '')}
    minWidth={text('minWidthm', '')}
    minHeight={text('minHeight', '')}
    maxWidth={text('maxWidthm', '')}
    maxHeight={text('maxHeight', '')}

    verticalSections={boolean('verticalSections', false)}

    topSections={[
      {
        content: <ExampleContent />,
        spaceAfter: '24px'
      }
    ]}

    sections={[
      {
        width: '256px',
        content: <ExampleContent />,
        spaceAfter: '24px'
      },
      {
        width: 'remaining',
        content: <ExampleContent />
      }
    ]}
  />
))

stories.add('equal columns', () => (
  <Layout
    width={text('widthwidt', '100%')}
    height={text('heighthei', '')}
    minWidth={text('minWidthm', '')}
    minHeight={text('minHeight', '')}
    maxWidth={text('maxWidthm', '')}
    maxHeight={text('maxHeight', '')}

    verticalSections={boolean('verticalSections', false)}

    sections={[
      {
        content: <ExampleContent />,
        spaceAfter: '24px',
        width: 'remaining'
      },
      {
        content: <ExampleContent />,
        spaceAfter: '24px',
        width: 'remaining'
      },
      {
        content: <ExampleContent />,
        width: 'remaining'
      }
    ]}
  />
))

stories.add('scrollable sections', () => (
  <Layout
    width={text('widthwidt', '100%')}
    height={text('heighthei', '100vh')}
    minWidth={text('minWidthm', '')}
    minHeight={text('minHeight', '')}
    maxWidth={text('maxWidthm', '')}
    maxHeight={text('maxHeight', '')}

    verticalSections={boolean('verticalSections', false)}

    topSections={[
      {
        content: <ExampleContent />,
        spaceAfter: '24px'
      }
    ]}

    scrollableSections

    sections={[
      {
        content: <ExampleContent />,
        spaceAfter: '24px',
        width: 'remaining'
      },
      {
        content: <ExampleContent2 />,
        width: 'remaining'
      }
    ]}
  />
))
