import './App.css'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Exchanges from './Pages/Exchanges'
import News from './Pages/News'
import About from './Pages/About'
import AboutAuthor from './Pages/AboutAuthor'
import Contact from './Pages/Contact'
import CryptoCurrencies from './Pages/CryptoCurrencies'
import CryptoDetails from './Pages/CryptoDetails'

function App() {
 
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/cryptocurrencies" element={<CryptoCurrencies/>} />
          <Route exact path="/exchanges" element={<Exchanges/>} />
          <Route exact path="/news" element={<News/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/aboutauthor" element={<AboutAuthor/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/crypto/:coinId" element={<CryptoDetails/>} />
        </Routes>
      </Router>
     
    </div>
  )
}

export default App
