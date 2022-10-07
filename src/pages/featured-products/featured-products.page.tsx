import { FunctionComponent } from 'react'

// Components
import Header from '../../components/header/header.component'
import FeaturedOverview from '../../components/featured-overview/featured-overview.component'

const FeaturedProductsPage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <FeaturedOverview />
    </>
  )
}

export default FeaturedProductsPage
