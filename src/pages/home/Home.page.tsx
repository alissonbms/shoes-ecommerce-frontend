import { FunctionComponent } from 'react'
import Categories from '../../components/categories/categories.component'

// Components
import Header from '../../components/header/header.component'
import Hero from '../../components/hero/hero.component'

const HomePage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
    </>
  )
}

export default HomePage
