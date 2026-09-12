import './App.css'
import Banner from './Component/Banner/Banner'
import Nav from './Component/Nav/Nav'
import Technologies from './Component/Technologies/Technologies'
import Footer from './Component/Footer/Footer'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Nav />
      <Banner></Banner>
      <Technologies></Technologies>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
