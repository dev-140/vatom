import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDocs, getDoc, query, orderBy, collection } from 'firebase/firestore'
import { db } from './firebase/firebase'
import Comment from './comment/Comment'
import UploadComments from './comment/UploadComments'

function SingleFilePage() {
    const [data, setData] = useState({})
    const [commentList, setCommentList] = useState([])
    const params = useParams()
    const dataId = params.fileId
    const docRef = doc(db, 'pdfFiles', dataId)

    const getData = async () => {
        const docSnap = await getDoc(docRef);
        setData(docSnap.data())
    };

    getData()

    const commentListRefs = collection(db, 'pdfFiles', dataId, 'comments')

    const getComments = async () => {
        const data = await getDocs(query(commentListRefs, orderBy('time', 'desc')));
        const newData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        
        setCommentList(newData);
    };

    getComments()


    return (
    <div className='single-file-main-container'>
        <div className='container'>
            <p>by: {data.author}</p>
            <p>desc: {data.desc}</p>

            <div>
                <h4>Comments</h4>
                {commentList.map(comment => <Comment key={comment.id} name={comment.author} comment={comment.comment} date={comment.date} />)}
            </div>

            <UploadComments fileId={dataId} />
        </div>
    </div>
    )
}

export default SingleFilePage