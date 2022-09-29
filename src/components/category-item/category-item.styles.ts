import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

interface CategoryItemContainerProps {
  categoryBackground: string
}

export const CategoryItemContainer = styled.div<CategoryItemContainerProps>`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: color;
  transition: all 0.5s ease;
  background-image: ${(props) => `url(${props.categoryBackground})`};

  &:hover {
    transform: scale(0.9);
  }
`
export const CategoryName = styled.div`
  color: ${Colors.text.white};
  text-align: center;
  background: linear-gradient(50deg, #dd2576, #ff521f);
  opacity: 0.5;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 10px;
  border: 1px solid #212529;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background: linear-gradient(50deg, #dd2576, #ff521f);
    opacity: 1;
  }

  & p:nth-child(1) {
    font-weight: 600;
  }
`
