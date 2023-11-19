import { HashRouter} from 'react-router-dom'
import './css/App.css'

import Links from './Links'
import Header from './components/Header'

function App() {

  return (
 <HashRouter>
  <Header/>
    <Links/>
 </HashRouter>
  )
}

export default App
