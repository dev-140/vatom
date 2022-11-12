import React from "react"
import '../src/css/style.css'
import Homepage from "./components/Homepage"
import Navigation from "./components/Navigation"
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Blogs from "./pages/Blogs"
import ErrorPage from "./components/ErrorPage"
import Login from "./components/Login"
import SingleFilePage from "./components/SingleFilePage"
import Browse from "./components/Browse"
import UploadCategory from "./components/UploadCategory"
import Upload from "./components/Upload"
import Footer from "./components/Footer"
import ScrollTop from "./components/ScrollTop"

// test

function App() {
    return (
        <Router>
            <div className="App">
                <ScrollTop />
                <Navigation />
                <Routes>
                    <Route path='/home' element={<Homepage />} /> 
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='*' element={<ErrorPage />}/>
                    <Route path='/login' element={<Login />} />
                    <Route path='/upload-category' element={<UploadCategory />} />
                    <Route path='/upload/:categoryId' element={<Upload />} />
                    <Route path='/browse' element={<Browse />} />
                    <Route path='/file/:fileId' element={<SingleFilePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
