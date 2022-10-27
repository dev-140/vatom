import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDocs, getDoc, query, orderBy, addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from './firebase/firebase'
import $ from 'jquery'
import Comment from './comment/Comment'
import Padding from '../components/dividers/Padding'
import { motion } from 'framer-motion'
import Loading from './loading/Loading'

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
        jQuerycode();
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
        document.body.classList.add('done-loading-data')
        
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

    function jQuerycode() {
        var count = $(".comment-list").children().length;
        $('.comment-count').text('Comments: ' + count);
    }

    return (
        <motion.div className='single-file-main-container d-flex align-items-center flex-column' initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ delay: .1}}>
            <Loading />
            <Padding />
            <div className='container flex-column'>
                <div className='data-container d-flex flex-column'>
                    <p className='author purple-sub-heading'>by: {data.author}</p>
                    <p className='purple-heading data-title'>{data.title}</p>
                    <p className='desc purple-sub-heading'>{data.desc}</p>
                    <a className='purple-btn' href={data.url}>View File</a>
                </div>

                <div className='upload-comment-main-container'>
                    <h4 className='purple-heading comment-section-heading'>Add Comment</h4>
                    <form onSubmit={handleSubmit} className='d-flex flex-column flex-md-row'>
                        <input id='name' className='form-control' type='text' placeholder='Name' value={author} onChange={ e=> setAuthor(e.target.value) }/>
                        <input id='comment' className='form-control' type='text' placeholder='Comment' value={comment} onChange={ e=> setComment(e.target.value) }/>
                        <button type='submit' className='white-btn' onClick={getComments}>Upload</button>
                    </form>
                </div>

                <div className='comment-section'>
                    <h4 className='purple-heading comment-count comment-section-heading'>Comments:</h4>
                    <div className='comment-list d-flex flex-column'>
                        {commentList.map(comment => <Comment key={comment.id} name={comment.author} comment={comment.comment} date={comment.date} />)}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default SingleFilePage