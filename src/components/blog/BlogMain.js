import React, { useState ,useEffect } from 'react';
import BlogCards from './BlogCards';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase' 
 
function BlogMain() {
    const [files, setFiles] = useState([])
    useEffect(()=> {
        getFile()
    }, [])

    useEffect(()=> {
        console.log(files)
    }, [files])

   function getFile() {
    const pdfListRef = collection(db, 'pdfFiles') 
        getDocs(pdfListRef) 
        .then(response => {
            const files = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            }))
            setFiles(files)
        })
        .catch(error => console.log(error.message))
   }

    return (
        <div className='blog-container d-flex flex-column flex-md-row'>
            {files.map(file => <BlogCards key={file.id} author={file.data.author} bId={file.data.url} title={file.data.title} text={file.data.desc}/>)} 
        </div> 
    )
}

export default BlogMain;