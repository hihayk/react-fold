import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

const req = require.context('../src/', true, /\.example.js$/)

function loadStories () {
  req.keys().forEach(req)
}

setOptions({
  name: '',
  url: '',
  downPanelInRight: true,
  sortStoriesByKind: true
})

configure(loadStories, module)
