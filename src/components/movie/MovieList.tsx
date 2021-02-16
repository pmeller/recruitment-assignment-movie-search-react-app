import React from 'react'
import styled from 'styled-components'

import { Movie } from '../../api'
import { GlobalDesignTokens, unit } from '../styles'

import { MovieCard } from './MovieCard'

export const MovieList: React.FunctionComponent<{ movies: Movie[] }> = ({ movies }) => (
  <Grid>
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </Grid>
)

const Grid = styled.div`
  margin: ${unit(4)} 0;

  display: grid;

  grid-column-gap: ${unit(4)};
  grid-row-gap: ${unit(4)};
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: ${GlobalDesignTokens.Breakpoints.Tablet}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: ${GlobalDesignTokens.Breakpoints.Mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
