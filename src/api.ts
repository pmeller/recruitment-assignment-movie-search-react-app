import { Observable } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map } from 'rxjs/operators'

import { createQueryString } from './helpers/url'

const TMDB_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWVhMGQ1NWQyNjQ4NjhlMjFhMTZmYjk1NjYxYjQyNCIsInN1YiI6IjYwMjgwNTIyMGZiMzk4MDA0MGNhNTJmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IOCWlDCLUClTmqqtHeYhFeM8F7db0jGLWRMtTzIWFqQ'

const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3'

type TMDBSearchMovieResultDTO = {
  page: number
  total_results: number
  total_pages: number
  results: TMDBMovieDTO[]
}

type TMDBMovieDTO = {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  release_date?: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type Movie = {
  id: number
  title: string
  originalTitle: string
  releaseYear?: number
  posterPath?: string
}

export type SearchMoviesResult = {
  query: string
  page: number
  totalResults: number
  totalPages: number
  results: Movie[]
}

const movieFromDTO = (dto: TMDBMovieDTO): Movie => ({
  id: dto.id,
  title: dto.title,
  originalTitle: dto.original_title,
  releaseYear: dto.release_date ? parseInt(dto.release_date.substring(0, 4)) : undefined,
  posterPath: dto.poster_path || undefined,
})

// ref: https://developers.themoviedb.org/3/search/search-movies
export const searchMovies = (query: string, page?: number): Observable<SearchMoviesResult> => {
  const headers = {
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8',
  }

  const queryString = createQueryString({
    query,
    page,
  })

  return ajax.getJSON<TMDBSearchMovieResultDTO>(`${TMDB_API_BASE_URL}/search/movie?${queryString}`, headers).pipe(
    map(data => ({
      query,
      page: data.page,
      totalResults: data.total_results,
      totalPages: data.total_pages,
      results: data.results.map(movieFromDTO),
    }))
  )
}

export const getMoviePosterUrl = (movie: Movie, width?: number) =>
  movie.posterPath ? `https://image.tmdb.org/t/p/${width ? 'w' + width : 'original'}${movie.posterPath}` : undefined

export const getMovieDetailsUrl = (movie: Movie) => `https://www.themoviedb.org/movie/${movie.id}`
