import { FunctionComponent } from 'react'
import FeaturedOverview from '../../components/featured-overview/featured-overview.component'

// Components
import Header from '../../components/header/header.component'

const FeaturedItemsPage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <FeaturedOverview />
    </>
  )
}

export default FeaturedItemsPage
