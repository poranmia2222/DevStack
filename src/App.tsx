import './App.css'
import Banner from './Component/Banner/Banner'
import Nav from './Component/Nav/Nav'
import Technologies from './Component/Technologies/Technologies'

function App() {

  return (
    <>
      <header>
        <Nav />
        <Banner></Banner>
      </header>
      <main>
         <Technologies></Technologies>
      </main>
    </>
  )
}

export default App
