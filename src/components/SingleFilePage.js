import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDocs, getDoc, query, orderBy, addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from './firebase/firebase'
import Comment from './comment/Comment'

function SingleFilePage() {
    const [data, setData] = useState({})
    const [commentList, setCommentList] = useState([])
    const [comment, setComment] = useState('')
    const [author, setAuthor] = useState('')
    const params = useParams()
    const dataId = params.fileId
    const docRef = doc(db, 'pdfFiles', dataId)
    const commentListRefs = collection(db, 'pdfFiles', dataId, 'comments')

    useEffect(() => {
        getData()
        getComments()
    }, [])

    const getData = async () => {
        const docSnap = await getDoc(docRef);
        setData(docSnap.data())
        console.log('repeating1')
    };

    const getComments = async () => {
        const data = await getDocs(query(commentListRefs, orderBy('time', 'desc')));
        const newData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        console.log('repeating2')
        
        setCommentList(newData);
    };

    const today = Date.now()

    var date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(today)
    var time = Timestamp.now();

    function handleSubmit(e) {
        e.preventDefault()
        if (comment === '') {
            return
        }
        const commentCollectionRef = collection(db, 'pdfFiles', dataId, 'comments')
        addDoc(commentCollectionRef, { author, comment, time, date}).then(response => {
            console.log(response)
            console.log('repeating3')
        }).catch(error => {
            console.log(error.message)
        })
    }
    
    return (
        <div className='single-file-main-container'>
            <div className='container flex-column'>
                <div className='data-container d-flex flex-column'>
                    <p className='author'>by: {data.author}</p>
                    <p className='desc'>Description: {data.desc}</p>
                    <a className='btn btn-primary view-file-btn' href={data.url}>View File</a>
                </div>

                <div className='comment-section'>
                    <h4 className='heading'>Comments</h4>
                    <div className='comment-list d-flex flex-row'>
                        {commentList.map(comment => <Comment key={comment.id} name={comment.author} comment={comment.comment} date={comment.date} />)}
                    </div>
                </div>

                <div className='upload-comment-main-container'>
                    <h4>Add Comment</h4>
                    <form onSubmit={handleSubmit}>
                        <input id='name' type='text' placeholder='name' value={author} onChange={ e=> setAuthor(e.target.value) }/>
                        <input id='comment' type='text' placeholder='comment' value={comment} onChange={ e=> setComment(e.target.value) }/>
                        <button type='submit' onClick={getComments}>upload</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingleFilePage