import styled from 'styled-components'
import Colors from '../../theme/theme.colors'
interface HeaderTagProps {
  personalizedBackground?: boolean
}

export const HeaderTag = styled.header<HeaderTagProps>`
  width: 100%;

  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  transition: all 0.3s ease;
  ${(props) =>
    props.personalizedBackground === true
      ? 'background: transparent; position: absolute;'
      : `background: ${Colors.background.dark}; position: initial;`};
  align-items: center;
`

export const Logo = styled.a`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 5px;
  color: ${Colors.text.white};
  text-shadow: 2px 2px 3px black;

  &:hover {
    cursor: pointer;
  }
`

export const Navlist = styled.ul`
  display: flex;
  column-gap: 45px;

  a {
    color: ${Colors.text.white};
    font-weight: 600;
    font-size: 18px;
    padding: 10px 0px;
    transition: all 0.3s ease;
    display: inline-block;
  }

  a:hover {
    color: ${Colors.text.orange};
    cursor: pointer;
    transform: scale(1.3);
  }
`

export const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;

  a {
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      transform: rotate3d(1, 2, 3, 10deg) scale(1.2);
    }
  }

  span {
    position: absolute;
    background-color: ${Colors.text.orange};
    color: ${Colors.text.white};
    border-radius: 35%;
    right: -15%;
    top: -10%;
    width: 1.2rem;
    height: 1.2rem;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }

  i {
    font-size: 40px;
    color: ${Colors.text.white};
    transition: all 0.3s ease;
    text-shadow: 1px 1px 2px black;
    &:hover {
      cursor: pointer;
    }
  }
`

export const MenuIcon = styled.div`
  font-size: 32px;
  color: ${Colors.text.white};
  margin-right: 20px;
  z-index: 1001;
  display: none;
`
