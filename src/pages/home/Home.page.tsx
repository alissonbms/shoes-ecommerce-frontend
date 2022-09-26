import { FunctionComponent } from 'react'
import Categories from '../../components/categories/categories.component'

// Components
import Header from '../../components/header/header.component'

const HomePage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Categories />
    </>
  )
}

export default HomePage
