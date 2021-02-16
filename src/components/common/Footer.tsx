import React from 'react'
import styled from 'styled-components'

import { GlobalDesignTokens, unit } from '../styles'

// TMDB requires attribution https://www.themoviedb.org/documentation/api/terms-of-use
export const Footer: React.FunctionComponent = () => (
  <FooterContainer>This product uses the TMDb API but is not endorsed or certified by TMDb.</FooterContainer>
)

const FooterContainer = styled.div`
  text-align: center;
  font-size: ${GlobalDesignTokens.Typography.FontSize.XS};
  color: ${GlobalDesignTokens.Footer.TextColor};
  line-height: ${unit(1)};
  margin: ${unit(16)} 0 ${unit(6)} 0;
`
