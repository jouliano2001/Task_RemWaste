import './App.css'
import ProcessBar from './Components/ProcessBar'
import { BackgroundGradientAnimation } from './Components/ui/background-gradient-animation'
import SelectSkip from './Pages/SelectSkip'

function App() {

  return (
    <BackgroundGradientAnimation>
      <ProcessBar/>
      <SelectSkip/>
    </BackgroundGradientAnimation>
  )
}

export default App
