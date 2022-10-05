import { FunctionComponent } from 'react'

// Components
import Header from '../../components/header/header.component'
import Hero from '../../components/hero/hero.component'
import Categories from '../../components/categories/categories.component'

const HomePage: FunctionComponent = () => {
  return (
    <>
      <Header personalizedBackground={true} />
      <Hero />
      <Categories />
    </>
  )
}

export default HomePage
