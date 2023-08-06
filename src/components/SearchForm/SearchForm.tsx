import React from 'react'
import * as S from './SearchFormStyle'

type IProps = {
  searchString: string
  onSearch: () => void
  setSearchString: (value: string) => void
  // setSearchString: React.Dispatch<React.SetStateAction<string>>
}

const SearchForm = ({ searchString, onSearch, setSearchString }: IProps) => {
  return (
    <S.Form>
      <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <button onClick={onSearch}>Найти</button>
    </S.Form>
  )
}

export default SearchForm
