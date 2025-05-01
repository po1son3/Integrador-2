import { BrowserRouter } from 'react-router'
import Rutas from './routes/Rutas'
import Cabecera from './components/Cabecera'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>

    <Cabecera />  

    <Rutas />
    
    
    
    <Footer />
    </BrowserRouter>
  )
}

export default App