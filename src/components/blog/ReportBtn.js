import React, { useState } from 'react'
import { doc, updateDoc, increment } from "firebase/firestore"
import { db } from '../firebase/firebase'

function ReportBtn(props) {
    const [reported, setReported] = useState('report');

    function reportId() {
        var setId = JSON.parse(localStorage.getItem('k') || "[]")
        const arr = Array.from([props.uid]);
        console.log(arr); 
        setId.push(arr)
        localStorage.setItem('k', JSON.stringify(setId))
    }

    const handleUpdate = async (e) => {
        if (reported === 'report') {
            setReported('reported')
            e.preventDefault()
            const docRef = doc(db, 'pdfFiles', props.uid)
            try{
                await updateDoc(docRef, {
                    reportCount: increment(1)
                })
            } catch (err) {
                console.log(err.message)
            }
        } else {
            setReported('report')
            e.preventDefault()
            const docRef = doc(db, 'pdfFiles', props.uid)
            try{
                await updateDoc(docRef, {
                    reportCount: increment(-1)
                })
            } catch (err) {
                console.log(err.message)
            }
        }
    }

    return (
        <button className='btn btn-danger report' data-uid={props.uid} data-count={props.reportCount} onClick={(e) => {handleUpdate(e); reportId(e)}}>{reported}</button>
    )
}

export default ReportBtn