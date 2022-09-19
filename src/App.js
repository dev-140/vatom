import React from "react"
import '../src/css/style.css'
import Homepage from "./components/Homepage"
import Navigation from "./components/Navigation"
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Blogs from "./pages/Blogs"
import ErrorPage from "./components/ErrorPage"
import Login from "./components/Login"

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route path='/home' element={<Homepage />} /> 
                    <Route path='/home/blogs' element={<Blogs />} />
                    <Route path='*' element={<ErrorPage />}/>
                    <Route path='/home/login' element={<Login />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
