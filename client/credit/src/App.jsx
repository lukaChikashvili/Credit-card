import { Route, Routes } from "react-router-dom"
import CanvasPage from "./components/CanvasPage"


function App() {


  return (
    <>

      

      <Routes>
        <Route path="/creditCard" element = {<CanvasPage />} />
      </Routes>
    </>
  )
}

export default App
