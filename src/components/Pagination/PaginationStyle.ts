import styled from 'styled-components'

export const Numbers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
`

export const Number = styled.button`
  background: none;
  border: 1px solid #f2c6b4;

  &:disabled {
    border: none;
    background: none;
    cursor: default;
  }
`
