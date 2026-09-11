import { Suspense } from 'react'
import './App.css'
import Banner from './Component/Banner/Banner'
import Nav from './Component/Nav/Nav'
import Technologies from './Component/Technologies/Technologies'
import Footer from './Component/Footer/Footer'

function App() {

  const techologiesPromise = async () => {
    const res = await fetch("/public/technology_data.json")
    const data = await res.json()
    return data
  }

  return (
    <>
      <Nav />
      <Banner></Banner>
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies techologiesPromise={techologiesPromise()}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
