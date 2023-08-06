import React from 'react'
import * as S from './SortStyle'

interface IProps {
  sortOrder: string
  onSort: () => void
}

const Sort = ({ sortOrder, onSort }: IProps) => {
  return (
    <S.Sort>
      Сортировать по:
      <button onClick={onSort}>
        кол-ву репозиториев {sortOrder === 'asc' ? '↑' : '↓'}
      </button>
    </S.Sort>
  )
}

export default Sort
