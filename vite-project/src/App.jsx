
import './App.css'
import Blog from './blog/Blog'
import Design from './designss/Design'
import Explore from './explore/Explore'
import Footer from './footer/Footer'
import Hero from './hero/Hero'
import Make from './maketime/Make'
import Navber from './navber/Navber'
import Quickest from './quickest/Quickest'
import Work from './work/Work'

function App() {
  

  return (
  <>
    <h1 className=' text-red-600 bg-green-500'> sb sakib sarkar</h1>
    <Navber/>
    <Hero/>
    <Explore/>
    <Work/>
    <Design/>
    <Make/>
    <Quickest/>
    <Blog/>
    <Footer/>
  </>
  )
}

export default App
