import { useState } from 'react'
import './App.css'
import HelloComponent from './components/HelloComponent'
import TopNav from './components/TopNav'
import Featured from './components/Featured'
import Delivery from './components/Delivery'
import TopPicks from './components/TopPicks'
import Meal from './components/Meal'
import Categories from './components/Categories'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HelloComponent></HelloComponent> */}
      <TopNav></TopNav>
      <Featured></Featured>
      <Delivery></Delivery>
      <TopPicks></TopPicks>
      <Meal></Meal>
      <Categories></Categories>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  )
}

export default App