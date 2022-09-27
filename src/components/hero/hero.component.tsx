import { FunctionComponent } from 'react'
import { HeroTag, HomeText, Button } from './hero.styles'

const Hero: FunctionComponent = () => {
  return (
    <HeroTag>
      <HomeText>
        <h1>
          Comfortable <br />
          <span>and stylish</span>
        </h1>
        <p>Because what you wear has always been important</p>
        <Button href="#">View featured items</Button>
      </HomeText>
    </HeroTag>
  )
}

export default Hero
