import styled from 'styled-components'
import Colors from '../../theme/theme.colors'
import Fonts from '../../theme/theme.fonts'

export const TextCenter = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;

  h2 {
    font-size: ${Fonts.h3Font};
    letter-spacing: 5px;
    background: ${Colors.background.linearGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
export const CategoriesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: end;

  &div:nth-child(1) {
    grid-area: a;
  }
  &div:nth-child(2) {
    grid-area: b;
  }
  &div:nth-child(3) {
    grid-area: c;
  }
`

export const CategoriesContent = styled.div`
  height: 500px;
  width: 1920px;
  display: grid;
  padding: 30px;
  grid-gap: 15px;
  grid-template-areas: 'a b c';
`
