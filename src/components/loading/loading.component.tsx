import { FunctionComponent } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

// Styles
import { LoadingContainer } from './loading.styles'

interface LoadingProps {
  message?: string
}

export const Loading: FunctionComponent<LoadingProps> = ({ message }) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <PulseLoader size={30} color={'#ff521f'} />
    </LoadingContainer>
  )
}
