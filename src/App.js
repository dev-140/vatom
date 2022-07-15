import React from "react"
import '../src/css/style.css'
import Homepage from "./components/Homepage"
import Navigation from "./components/Navigation"
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Blogs from "./pages/Blogs"
import ErrorPage from "./components/ErrorPage"

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route path='/' element={<Homepage />} /> 
                    <Route path='/en/blogs' element={<Blogs />} />
                    <Route path='*' element={<ErrorPage />}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;
