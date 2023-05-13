import React from 'react'
import './main.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Lounge from './Components/Lounge/Lounge'
import Search from './Components/Search/Search'
import Support from './Components/Support/Support'
import Info from './Components/Info/Info'
import Travelers from './Components/Travelers/Travelers'
import Subscribers from './Components/Subscribers/Subscribers'
import Footer from './Components/Footer/Footer'


import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer />
    </div>
  )
}

export default App