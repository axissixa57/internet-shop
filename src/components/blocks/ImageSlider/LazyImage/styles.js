import styled from 'styled-components'

export const LazyImageStyled = styled.div`
  position: relative;
  height: 0;
  background: white;

  .lazyImage__img {
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 85%;
    height: 100%;
  }
`
