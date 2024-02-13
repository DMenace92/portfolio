import MainPageComponent from './Components/MainProfolioPage/MainPageComponent'

import './App.css'
import { ActivePageProvider } from './providers/activePageProvider'

function App() {
  return (
    <div className="App">
      <ActivePageProvider>
        <MainPageComponent />
      </ActivePageProvider>
    </div>
  )
}

export default App
