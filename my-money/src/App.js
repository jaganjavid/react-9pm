import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from './components/Header'
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App