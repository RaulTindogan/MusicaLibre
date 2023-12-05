import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Discover from './pages/Discover'
import About from './pages/About'
import ContactPage from './pages/ContactPage'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Footer from './components/Footer'

function App() {

  return(
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/discover' element={<Discover />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
          </Routes>
        </main>
        <Footer />
      </Router>

    </>
    
  )
}

export default App