import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}
`

const App: React.FunctionComponent = () => (
  <>
    <GlobalStyles />
    <h1>Hello world!</h1>
  </>
)

const root = document.createElement('div')

window.document.body.appendChild(root)

ReactDOM.render(<App />, root)
