import React from 'react'
import styled from 'styled-components'

import { getMovieDetailsUrl, getMoviePosterUrl, Movie } from '../../api'
import { Color, GlobalDesignTokens, unit } from '../styles'

export const MovieCard: React.FunctionComponent<{ movie: Movie }> = ({ movie }) => {
  const posterUrl = getMoviePosterUrl(movie, 500)

  return (
    <Container href={getMovieDetailsUrl(movie)} target='_blank'>
      <PosterWrapper>
        {posterUrl ? <Poster src={posterUrl} /> : <NoPosterMessage>Poster not available</NoPosterMessage>}
      </PosterWrapper>
      <Title>
        {movie.title}
        {movie.releaseYear && ` (${movie.releaseYear})`}
      </Title>
      {movie.title !== movie.originalTitle && <OriginalTitle>{movie.originalTitle}</OriginalTitle>}
    </Container>
  )
}

const posterAspectRatio = 3 / 2

const PosterWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding-top: ${posterAspectRatio * 100}%;
  position: relative;
  background-color: ${Color.Gray2};
`

const NoPosterMessage = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${Color.Gray5};
  font-size: ${GlobalDesignTokens.Typography.FontSize.XS};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const Poster = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
`

const Title = styled.p`
  font-size: ${GlobalDesignTokens.Typography.FontSize.M};
  font-weight: bold;
  line-height: ${unit(3)};
  margin-top: ${unit(1)};
  transition: color 0.3s;
  text-align: center;
`

const OriginalTitle = styled.p`
  font-size: ${GlobalDesignTokens.Typography.FontSize.S};
  font-style: italic;
  line-height: ${unit(2)};
  text-align: center;
`

const Container = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    ${Poster} {
      transform: scale(1.1);
    }

    ${Title} {
      color: ${Color.LightBlue};
    }
  }
`
