import { Suspense } from 'react'
import './App.css'
import Banner from './Component/Banner/Banner'
import Nav from './Component/Nav/Nav'
import Technologies from './Component/Technologies/Technologies'

function App() {

  const techologiesPromise = async () => {
    const res = await fetch("/public/technology_data.json")
    const data = await res.json()
    return data
  }

  return (
    <>
      <header>
        <Nav />
        <Banner></Banner>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Technologies techologiesPromise={techologiesPromise()}></Technologies>
        </Suspense>

      </main>
    </>
  )
}

export default App
