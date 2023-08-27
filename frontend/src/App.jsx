import { ToastContainer } from "react-toastify"
import Header from "./components/Header"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <Router>
     <div className="container"> 
     <Header />
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
     </div>
    </Router>
  )
}

export default App
