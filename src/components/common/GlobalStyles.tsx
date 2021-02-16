import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { GlobalDesignTokens } from '../styles'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&display=swap');

  ${reset}

  * {
    box-sizing: padding-box;
  }

  body, input {
    font-family: 'Noto Sans', sans-serif;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance:none;
  }

  body {
    background: ${GlobalDesignTokens.App.BackgroundColor};
    color: ${GlobalDesignTokens.Typography.TextColor};
  }
`
