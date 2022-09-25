import React, { useEffect, useState} from 'react'
import { doc, updateDoc, increment } from "firebase/firestore"
import { db } from '../firebase/firebase'

function ReportBtn(props) {
    const [reportedId, setReportedId] = useState('')
    const [reportedList, setReportedList] = useState([])

    const handleUpdate = async (e) => {
        e.preventDefault()
        const docRef = doc(db, 'pdfFiles', props.uid)
        try{
            await updateDoc(docRef, {
                reportCount: increment(1)
            })
        } catch (err) {
            console.log(err.message)
        }
    }

    const addReport = (e) => {
        setReportedList([...reportedList, reportedId])
    }

    useEffect(()=> {
        localStorage.setItem('dataReported', JSON.stringify([...reportedList]));
    }, [addReport])

    return (
        <button className='btn btn-danger' data-uid={props.uid} data-count={props.reportCount} onClick={(e) => { handleUpdate(e) }}>report</button>
    )
}

export default ReportBtn