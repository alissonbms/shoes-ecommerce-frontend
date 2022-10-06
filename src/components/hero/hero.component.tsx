import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeroTag, HomeText, Button } from './hero.styles'

const Hero: FunctionComponent = () => {
  const navigate = useNavigate()

  const handleFeaturedItemsPage = (): void => {
    navigate('/featured-items')
  }
  return (
    <HeroTag>
      <HomeText>
        <h1>
          Comfortable <br />
          <span>and stylish</span>
        </h1>
        <p>Because what you wear has always been important</p>
        <Button onClick={handleFeaturedItemsPage}>View featured items</Button>
      </HomeText>
    </HeroTag>
  )
}

export default Hero
