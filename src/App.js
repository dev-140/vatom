import React from "react"
import '../src/css/style.css'
import Homepage from "./components/Homepage"
import Navigation from "./components/Navigation"
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Blogs from "./pages/Blogs"
import ErrorPage from "./components/ErrorPage"
import Login from "./components/Login"
import Upload from "./components/Upload"
import SingleFilePage from "./components/SingleFilePage"
import Browse from "./components/Browse"

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route path='' element={<Homepage />} /> 
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='*' element={<ErrorPage />}/>
                    <Route path='/login' element={<Login />} />
                    <Route path='/upload' element={<Upload />} />
                    <Route path='/browse' element={<Browse />} />
                    <Route path='/file/:fileId' element={<SingleFilePage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
