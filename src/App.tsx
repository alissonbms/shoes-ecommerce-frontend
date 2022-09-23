import { FunctionComponent } from 'react'

interface AppProps {
  message?: string
}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
