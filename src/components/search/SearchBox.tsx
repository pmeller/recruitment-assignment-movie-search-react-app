import React, { useEffect, useRef } from 'react'
import { fromEvent, merge, Observable } from 'rxjs'
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators'
import styled from 'styled-components'

import { GlobalDesignTokens, unit } from '../styles'

import { SearchIcon } from './SearchIcon'

const AUTOSUBMIT_MIN_LENGTH = 3
const AUTOSUBMIT_DEBOUNCE = 500

export type SearchBoxProps<T> = {
  placeholder: string
  // NOTE: This component API is a bit unconventional as input element is also responsible for retrieving the data.
  // Reason for that is to take advantage of automatic request cancellation supported by RxJS (triggered by switchMap operator in this case)
  getData: (query: string) => Observable<T>
  onDataChange: (data: T) => void
}

export const SearchBox = <T extends any>({ placeholder, getData, onDataChange }: SearchBoxProps<T>) => {
  const formRef = useRef<HTMLFormElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (formRef.current && searchInputRef.current) {
      const typedQuery$ = fromEvent<React.ChangeEvent<HTMLInputElement>>(searchInputRef.current, 'input').pipe(
        map(event => event.target.value),
        filter(query => query.length >= AUTOSUBMIT_MIN_LENGTH),
        debounceTime(AUTOSUBMIT_DEBOUNCE)
      )

      const submittedQuery$ = fromEvent<React.FormEvent<HTMLFormElement>>(formRef.current, 'submit').pipe(
        tap(event => {
          event.preventDefault()
        }),
        map(() => searchInputRef.current?.value ?? ''),
        filter(query => query.length > 0)
      )

      const subscription = merge(typedQuery$, submittedQuery$)
        .pipe(
          distinctUntilChanged(),
          switchMap(query => getData(query))
        )
        .subscribe(searchResult => {
          onDataChange(searchResult)
        })

      return () => subscription.unsubscribe()
    }
  }, [formRef.current, searchInputRef.current])

  return (
    <form ref={formRef}>
      <Wrapper>
        <Input autoFocus ref={searchInputRef} type='search' placeholder={placeholder} />
        <Button type='submit'>
          <SearchIcon color={inputTextColor} />
        </Button>
      </Wrapper>
    </form>
  )
}

const inputMaxWidth = unit(80)
const inputHeight = unit(6)
const inputFontSize = GlobalDesignTokens.Typography.FontSize.L
const inputTextColor = GlobalDesignTokens.Input.TextColor
const inputPlaceholderColor = GlobalDesignTokens.Input.PlaceholderColor

const Wrapper = styled.div`
  position: relative;
  max-width: ${inputMaxWidth};

  margin: 0 auto;
`

const Input = styled.input`
  outline: 0;
  height: ${inputHeight};
  width: 100%;

  padding-left: calc((${inputHeight} - ${inputFontSize}) / 2);
  padding-right: ${inputHeight};

  font-size: ${inputFontSize};

  border-radius: ${unit(2)};
  border: 1px solid ${GlobalDesignTokens.Input.Border};

  transition: border-color 0.3s;

  &::placeholder {
    color: ${inputPlaceholderColor};
  }

  &:focus {
    border-color: ${GlobalDesignTokens.Input.BorderActive};
  }
`

const Button = styled.button`
  border: 0;
  background: none;

  cursor: pointer;

  width: ${inputHeight};
  height: ${inputHeight};

  position: absolute;
  right: 0;
`
