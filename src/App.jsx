import { Route, Routes } from "react-router-dom"
import { About } from "./pages/about"
import { History } from "./pages/history"
import { Home } from "./pages/home"
import { Login } from "./pages/login"


function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/historico" element={<History />} />
      </Routes>
    </div>
  )
}

export default App
