import './App.css'
import { Route,Routes,Navigate } from 'react-router-dom'
import Footer from './Components/Footer'
import Landing from "./Pages/Landing"
import Content from "./Pages/Content"
import View from "./Pages/View"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/restaurants" element={<Content/>} />
        <Route element={<View />} path="/:id/view" />
        <Route element={<Navigate to={"/"} />} path="/*" />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
