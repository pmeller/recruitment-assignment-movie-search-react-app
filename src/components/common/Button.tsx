import styled from 'styled-components'

import { Color, GlobalDesignTokens, unit } from '../styles'

const height = unit(6)
const fontSize = GlobalDesignTokens.Typography.FontSize.M

export const Button = styled.button`
  height: ${height};
  font-size: ${fontSize};
  text-transform: uppercase;
  letter-spacing: 1px;

  padding: 0 calc((${height} - ${fontSize}) / 2);
  margin: ${unit(1)};

  border: 0;
  outline: 0;
  border-radius: ${unit(2)};

  color: white;
  background-color: ${Color.DarkBlue};
  transition: background-color 0.3s ease;

  cursor: pointer;

  &:hover {
    background-color: ${Color.LightBlue};
  }
`
