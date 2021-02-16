import { modularScale } from 'polished'

const GRID_BASE = 8

export const unit = (n: number) => `${n * GRID_BASE}px`

const fontScale = (step: number) => modularScale(step, '16px', 'majorThird')

export enum Color {
  Gray0 = '#f8f9fa',
  Gray1 = '#e9ecef',
  Gray2 = '#dee2e6',
  Gray3 = '#ced4da',
  Gray4 = '#adb5bd',
  Gray5 = '#6c757d',
  Gray6 = '#495057',
  Gray8 = '#343a40',
  Gray9 = '#212529',
  LightBlue = '#01b4e4',
  DarkBlue = '#0d253f',
}

export const GlobalDesignTokens = {
  App: {
    DesktopWidth: '1080px',
    Margin: unit(2),
    BackgroundColor: Color.Gray0,
  },
  Breakpoints: {
    Mobile: '758px',
    Tablet: '1024px',
  },
  Typography: {
    TextColor: Color.Gray9,
    FontSize: {
      XXS: fontScale(-3),
      XS: fontScale(-2),
      S: fontScale(-1),
      M: fontScale(0),
      L: fontScale(1),
      XL: fontScale(2),
      XXL: fontScale(3),
    },
  },
  Input: {
    TextColor: Color.Gray9,
    PlaceholderColor: Color.Gray4,
    Border: Color.Gray3,
    BorderActive: Color.Gray5,
  },
  Footer: {
    TextColor: Color.Gray3,
  },
}
