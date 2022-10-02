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
    const getFileUrl = () => {
        setPdfUrl(`pdf/${pdfUpload.name + v4() + '.pdf'}`)
    }

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
                addDoc(filesCollectionRef, { title, desc, author, pdfUrl, url, reportCount, likeCount, time, date}).then(response => {
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
            <h4>Add Files</h4>
            <form onSubmit={handleSubmit}>
                <input id='title' type='text' placeholder='title' value={title} onChange={ e=> setTitle(e.target.value) }/>
                <input id='desc' type='text' placeholder='description' value={desc} onChange={ e=> setDesc(e.target.value) }/>
                <input id='author' type='text' placeholder='name' value={author} onChange={ e=> setAuthor(e.target.value) }/>
                <button type='submit' onClick={getFileUrl}>upload</button>
            </form>

            <input type='file' onChange={(event) => {setPdfUpload(event.target.files[0])}} />
        </div>
    </div>
  )
}

export default Upload