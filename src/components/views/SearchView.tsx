import React, { useState } from 'react'
import styled from 'styled-components'

import type { SearchMoviesResult } from '../../api'
import { searchMovies } from '../../api'
import { Button } from '../common/Button'
import { MovieList } from '../movie/MovieList'
import { SearchBox } from '../search/SearchBox'
import { GlobalDesignTokens, unit } from '../styles'

export const SearchView: React.FunctionComponent = () => {
  const [currentSearchResult, setCurrentSearchResult] = useState<SearchMoviesResult>()

  return (
    <Wrapper>
      <SearchBox placeholder='Search for movies...' getData={searchMovies} onDataChange={setCurrentSearchResult} />
      {currentSearchResult && (
        <>
          <ResultsTitle>
            Found {currentSearchResult.totalResults} results for &quot;{currentSearchResult.query}&quot; phrase
          </ResultsTitle>
          <MovieList movies={currentSearchResult.results} />
          {currentSearchResult.results.length !== currentSearchResult.totalResults && (
            <ButtonWrapper>
              <Button
                onClick={async () => {
                  const newSearchResults = await searchMovies(
                    currentSearchResult.query,
                    (currentSearchResult?.page ?? 0) + 1
                  ).toPromise()

                  setCurrentSearchResult({
                    ...newSearchResults,
                    results: [...currentSearchResult.results, ...newSearchResults.results],
                  })
                }}
              >
                Load more
              </Button>
            </ButtonWrapper>
          )}
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: ${unit(6)} 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ResultsTitle = styled.p`
  text-align: center;
  font-size: ${GlobalDesignTokens.Typography.FontSize.M};
  margin-top: ${unit(4)};
`
