import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(1turn);
  }
`

export const Loader = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 9px solid;
  border-color: #dbdcef;
  border-right-color: #474bff;
  animation: ${rotate} 1s infinite linear;
`
