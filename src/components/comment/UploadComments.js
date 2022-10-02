import React, { useState } from 'react'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from '../firebase/firebase'


function UploadComments(props) {
    const [comment, setComment] = useState('')
    const [author, setAuthor] = useState('')

    const today = Date.now()

    var date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(today)
    var time = Timestamp.now();

    function handleSubmit(e) {
        e.preventDefault()
        if (comment === '') {
            return
        }
        const commentCollectionRef = collection(db, 'pdfFiles', props.fileId, 'comments')
        addDoc(commentCollectionRef, { author, comment, time, date}).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.message)
        })
    }

  return (
    <div className='upload-comment-main-container'>
        <div className='container'>
            <h4>Add Comment</h4>
            <form onSubmit={handleSubmit}>
                <input id='name' type='text' placeholder='name' value={author} onChange={ e=> setAuthor(e.target.value) }/>
                <input id='comment' type='text' placeholder='comment' value={comment} onChange={ e=> setComment(e.target.value) }/>
                <button type='submit'>upload</button>
            </form>
        </div>
    </div>
  )
}

export default UploadComments