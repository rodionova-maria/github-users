import React from 'react'
import * as S from './PaginationStyle'

interface IProps {
  currentPageNumber: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = ({
  currentPageNumber,
  totalPages,
  onPageChange
}: IProps) => {
  return (
    <S.Numbers data-testid="pagination">
      Страницы:
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <S.Number
            key={page}
            onClick={() => onPageChange(page)}
            disabled={page === currentPageNumber}
          >
            {page}
          </S.Number>
        )
      )}
    </S.Numbers>
  )
}

export default Pagination
