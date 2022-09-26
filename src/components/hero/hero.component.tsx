import { FunctionComponent } from 'react'
import './hero.styles.css'

const Hero: FunctionComponent = () => {
  return (
    <section className="hero">
      <div className="home-text">
        <h1>
          Comfortable <br />
          <span>and stylish</span>
        </h1>
        <p>Because what you wear has always been important</p>
        <a href="#" className="btn">
          View featured items
        </a>
      </div>
    </section>
  )
}

export default Hero
