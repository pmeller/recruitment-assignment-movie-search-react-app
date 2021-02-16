import React from 'react'
import styled from 'styled-components'

import { Footer } from './common/Footer'
import { GlobalStyles } from './common/GlobalStyles'
import { Header } from './common/Header'
import { GlobalDesignTokens } from './styles'
import { SearchView } from './views/SearchView'

export const App: React.FunctionComponent = () => (
  <>
    <GlobalStyles />
    <AppWrapper>
      <Header />
      <SearchView />
      <Footer />
    </AppWrapper>
  </>
)

const AppWrapper = styled.main`
  max-width: ${GlobalDesignTokens.App.DesktopWidth};
  margin: 0 auto;
  padding: ${GlobalDesignTokens.App.Margin};
`
