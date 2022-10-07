import React, { useState } from 'react'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { storage, db } from './firebase/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4} from 'uuid'

function Upload() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [author, setAuthor] = useState('')
    const [pdfUpload, setPdfUpload] = useState('')
    const [pdfUrl, setPdfUrl] = useState('')
    const [type, setType] = useState('file')
    const getFileUrl = () => {
        setPdfUrl(`pdf/${pdfUpload.name + v4() + '.pdf'}`)
    }
    
    const menuClick = (e) => {

        if (type === 'file') {
            setType('question')
        } else {
            setType('file')
        }
    };

    const today = Date.now()

    var date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(today)

    var reportCount = 0;
    var likeCount = 0;
    var time = Timestamp.now();

    function handleSubmit(e) {
        e.preventDefault()
        if (pdfUpload == null) return;
        const pdfRef = ref(storage, pdfUrl)
        uploadBytes(pdfRef, pdfUpload).then(() => {
            alert('file uploaded')

            getDownloadURL(pdfRef).then(url => {
                console.log('Download URL',url)

                if (title === '') {
                    return
                }
                const filesCollectionRef = collection(db, 'pdfFiles')
                addDoc(filesCollectionRef, { title, desc, author, pdfUrl, url, reportCount, likeCount, time, date, type}).then(response => {
                    console.log(response)
                }).catch(error => {
                    console.log(error.message)
                })
            })
        })
    }

  return (
    <div className='upload-main-container'>
        <div className='container'>
            <div className='upload-container col-10'>
                <h4>Add Files</h4>
                <form onSubmit={handleSubmit} className='d-flex flex-column'>
                    <input className='mb-3 form-control' id='title' type='text' placeholder='Title' value={title} onChange={ e=> setTitle(e.target.value) }/>
                    <input className='mb-3 form-control' id='desc' type='text' placeholder='Description' value={desc} onChange={ e=> setDesc(e.target.value) }/>
                    <input className='mb-3 form-control' id='author' type='text' placeholder='Your Name' value={author} onChange={ e=> setAuthor(e.target.value) }/>
                    <div className='input-group mb-3 d-flex justify-content-center'>
                        <p className='btn btn-primary file-type' onClick={menuClick}>{type}</p>
                        <input className='file-input'  accept="application/pdf, application/vnd.ms-excel" type='file' onChange={(event) => {setPdfUpload(event.target.files[0])}} />
                    </div>
                    <button className='btn btn-primary' type='submit' onClick={getFileUrl}>Upload</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Upload