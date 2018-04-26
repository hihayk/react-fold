import React from 'react'
import styled from 'styled-components'

export const defaultTheme = {
  question: '#444',
  answer: '#888',
  button: '#497499',
  background: '#eee'
}

export const themes = {
  triangle: {
    question: '#444444',
    answer: '#124058',
    button: '#124058',
    background: '#BFCDD0',
    backgroundImage: 'https://images.unsplash.com/photo-1502786403187-735311c54e9d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=22eecb432550981c58dd5af78d72c5bd&auto=format&fit=crop&w=1950&q=80'
  },
  plant: {
    question: '#C9B299',
    answer: '#C9B299',
    button: '#614E38',
    background: '#2F2F27',
    backgroundImage: 'https://images.typeform.com/images/kXntUZCdPTJ8'
  }
}

const ThemeWrapper = styled.div`
  height: 100vh;
  ${props => props.pad && `padding: ${props.pad * 8}px`};
  margin: -32px;

  ${props => props.theme === 'defaultTheme' && `background-color: ${defaultTheme.background}`};
  ${props => props.theme === 'defaultTheme' && `background-image: url(${defaultTheme.backgroundImage})`};

  ${props => themes[props.theme] && `background-color: ${themes[props.theme].background}`};
  ${props => themes[props.theme] && `background-image: url(${themes[props.theme].backgroundImage})`};

  background-size: cover;
  display: flex;
  ${props => props.align === 'right-bottom' && 'justify-content: flex-end; align-items: flex-end'};
  ${props => props.align === 'top-left' && 'justify-content: flex-start; align-items: flex-start'};
`

export const availableThemes = Object.keys(themes)

export const Theme = ({
  children,
  theme,
  pad,
  align
}) => (
  <ThemeWrapper
    theme={theme}
    pad={pad}
    align={align}
  >
    {children}
  </ThemeWrapper>
)

Theme.defaultProps = {
  pad: 4,
  align: 'top-left'
}
