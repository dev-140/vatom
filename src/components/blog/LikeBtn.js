import React , { useState } from 'react'
import { doc, updateDoc, increment } from "firebase/firestore"
import { db } from '../firebase/firebase'

function LikeBtn(props) {
    const [likes, setLikes] = useState(props.likeCount);
    const [likeStatus, setLikeStatus] = useState('likes')

    function likeBtn(e) {
        if (likeStatus === 'likes') {
            setLikes(likes + 1)
            setLikeStatus('unlike')
            handleUpdate(e)
        } else if (likeStatus === 'unlike') {
            setLikes(likes - 1)
            setLikeStatus('likes')
            handleUpdateMinus(e)
        }
    }



    function likeId() {
        var setId = JSON.parse(localStorage.getItem('like') || "[]")
        const arr = Array.from([props.uid]);
        console.log(arr); 
        setId.push(arr)
        localStorage.setItem('likes', JSON.stringify(setId))
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        const docRef = doc(db, 'pdfFiles', props.uid)
        try{
            await updateDoc(docRef, {
                likeCount: increment(1)
            })
        } catch (err) {
            console.log(err.message)
        }
    }

    const handleUpdateMinus = async (e) => {
        e.preventDefault()
        const docRef = doc(db, 'pdfFiles', props.uid)
        try{
            await updateDoc(docRef, {
                likeCount: increment(-1)
            })
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <button className='btn btn-info like' data-uid={props.uid} data-like-count={props.likeCount} onClick={(e) => { likeId(e); likeBtn(e)}}>{likeStatus} : {likes}</button>
    )
}

export default LikeBtn