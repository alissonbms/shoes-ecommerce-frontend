import styled from 'styled-components'
import Colors from '../../theme/theme.colors'
import Fonts from '../../theme/theme.fonts'
import backgroundImage from '../../assets/background.jpg'

export const HeroTag = styled.section`
  color: ${Colors.text.white};
  padding: 100px 14%;
  min-height: 100vh;
  width: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center top;
  display: grid;
  align-items: center;
`
export const HomeText = styled.div`
  h1 {
    font-size: ${Fonts.big};
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: 0.2rem;
    text-shadow: 2px 2px 3px black;
    color: ${Colors.text.white};
    margin-bottom: 1.4rem;
  }
  span {
    font-size: ${Fonts.h2Font};
  }

  p {
    font-size: ${Fonts.normalFont};
    font-weight: 500;
    letter-spacing: 0.2rem;
    margin-bottom: 3rem;
  }
`

export const Button = styled.a`
  display: inline-block;
  background: ${Colors.background.linearGradient};
  padding: 13px 25px;
  color: ${Colors.text.white};
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 600;
  border-radius: 7px;
  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-10px);
  }
`
