import React from 'react'
import styled from 'styled-components'

import { Color, GlobalDesignTokens, unit } from '../styles'

export const Header: React.FunctionComponent = () => (
  <HeaderContainer>
    <Logotype>
      <LightBlue>Movie</LightBlue>
      <DarkBlue>Search</DarkBlue>
    </Logotype>
  </HeaderContainer>
)

const HeaderContainer = styled.div`
  text-align: center;
  margin: ${unit(8)} 0 ${unit(4)} 0;
`

const Logotype = styled.p`
  font-size: ${GlobalDesignTokens.Typography.FontSize.XXL};
  font-weight: bold;
`

const LightBlue = styled.span`
  color: ${Color.LightBlue};
`

const DarkBlue = styled.span`
  color: ${Color.DarkBlue};
`
