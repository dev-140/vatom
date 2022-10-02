import React, { useState ,useEffect } from 'react';
import BlogCards from './BlogCards';
import { collection, getDocs, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase' 
 
function BlogMain() {
    const [files, setFiles] = useState([])
    const [postList, setPostList] = useState([])
    const [removeFile, setRemoveFile] = useState('')

    useEffect((e)=> {
        getPost()
        getFile()
    }, [])


    useEffect(()=> {
        deleteFile()
    }, [removeFile])

    // useEffect(()=> {
    //     console.log(postList)
    // }, [postList])

   function getFile() {
    const pdfListRef = collection(db, 'pdfFiles')
        getDocs(pdfListRef) 
        .then(response => {
            response.docs.forEach((doc) => {
                console.log(doc.id, " => ", doc.data().reportCount);

                if(doc.data().reportCount >= 5) {
                    console.log('this needs to be removed', doc.id)
                    setRemoveFile(doc.id)
                }
            });
            
            const files = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            }))
            setFiles(files)
        })
        .catch(error => console.log(error.message))
   }

    const pdfListRefs = collection(db, 'pdfFiles')

    const getPost = async () => {
        const data = await getDocs(query(pdfListRefs, orderBy('time', 'desc')));
        const newData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        
        setPostList(newData);
    };

    const deleteFile = async () =>{
        const fileDoc = doc(db, 'pdfFiles', removeFile)
        await deleteDoc(fileDoc)
        console.log('this is', removeFile)
    }

    return (
        <div className='blog-container d-flex flex-column flex-md-row'>
            {postList.map(file => <BlogCards key={file.id} uid={file.id} time={file.date} reportCount={file.reportCount} author={file.author} bId={file.url} title={file.title} text={file.desc}/>)} 
        </div> 
    )
}

export default BlogMain;