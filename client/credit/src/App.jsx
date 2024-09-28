import { Route, Routes } from "react-router-dom"
import CanvasPage from "./components/CanvasPage"
import Header from "./components/Header"


function App() {


  return (
    <>

      <Header />
      
      <Routes>
        <Route path="/creditCard" element = {<CanvasPage />} />
      </Routes>
    </>
  )
}

export default App
