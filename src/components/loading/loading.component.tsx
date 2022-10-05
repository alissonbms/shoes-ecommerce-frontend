import { FunctionComponent } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

// Styles
import { LoadingContainer } from './loading.styles'

export const Loading: FunctionComponent = () => {
  return (
    <LoadingContainer>
      <PulseLoader size={30} color={'#ff521f'} />
    </LoadingContainer>
  )
  //   HashLoader
}
