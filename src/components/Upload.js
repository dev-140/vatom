import React, { useState} from 'react'
import { addDoc, collection, Timestamp} from 'firebase/firestore'
import { storage, db } from './firebase/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4} from 'uuid'
import { useParams, useNavigate} from 'react-router-dom'
import $ from 'jquery'
import Loading from './loading/Loading'
import { motion } from "framer-motion"

function Upload() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [author, setAuthor] = useState('')
    const [pdfUpload, setPdfUpload] = useState('')
    const [pdfUrl, setPdfUrl] = useState('')
    const [type, setType] = useState('document')
    const getFileUrl = () => {setPdfUrl(`pdf/${pdfUpload.name + v4() + '.pdf'}`)}
    const params = useParams()
    const dataCategory = params.categoryId
    document.body.classList.add('done-loading-data')
    const fileUrl = useNavigate()

    const menuClick = (e) => {
        if (type === 'document') {
            setType('question')
        } else {
            setType('document')
        }
    };  

    const today = Date.now()
    var date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(today)
    var reportCount = 0;
    var likeCount = 0;
    var time = Timestamp.now();

    function handleSubmit(e) {
        document.body.classList.remove('done-loading-data')
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
                addDoc(filesCollectionRef, { title, desc, author, pdfUrl, url, reportCount, likeCount, time, date, type, dataCategory}).then(response => {
                    console.log(response)
                    fileUrl(`/file/${response.id}`, { replace: true })
                }).catch(error => {
                    console.log(error.message)
                })
            })
        })
    }

    function jQuerycode() {
        // validate the inputs
        $.fn.validate = function() {
            var inputOne = $('.inputOne').val();
            var inputTwo = $('.inputTwo').val();
            var inputThree = $('.inputThree').val();

            if (inputOne === '' || inputTwo === '' || inputThree === '') {
                $('.submit-data').prop('disabled', true);
            } else {
                $('.submit-data').prop('disabled', false);
            }
        }

        setInterval(function () {
            $.fn.validate()
        }, 1000);
        
    }

    jQuerycode();

    return (
        <motion.div className='upload-main-container d-flex align-items-center h-100 pt-0' initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ delay: .1}}>
            <Loading />
            <div className='container'>
                <div className='upload-container col-12 col-md-10'>
                    <h4 className='purple-heading text-center text-md-start'>Upload {type}</h4>
                    <form onSubmit={handleSubmit} className='d-flex flex-column'>
                        <div className='input-wrapper d-flex flex-column flex-md-row justify-content-between align-items-start mb-1'>
                            <div className='col-12 col-md-6 p-1'>
                                <input className='mb-3 form-control inputOne' id='title' type='text' placeholder='Title' value={title} onChange={ e=> setTitle(e.target.value) }/>
                                <input className='mb-3 form-control inputTwo' id='desc' type='textarea' placeholder='Description' value={desc} onChange={ e=> setDesc(e.target.value) }/>
                                <input className='mb-3 form-control inputThree' id='author' type='text' placeholder='Your Name' value={author} onChange={ e=> setAuthor(e.target.value) }/>
                            </div>
                            <div className='file-input-container col-12 col-md-6 d-flex justify-content-start flex-column p-1'>
                                <p className='purple-btn file-type mb-3' onClick={menuClick}>Type: {type}</p>
                                <div className='file-input-btn-wrapper'>
                                    <input className='file-input' accept="application/pdf, application/vnd.ms-excel" type='file' onChange={(event) => {setPdfUpload(event.target.files[0])}} />
                                    <button className='file-overlay'><i className="fas fa-upload"></i>Select File</button>
                                </div>
                            </div>
                        </div>
                        <button className='btn purple-btn submit-data' type='submit' onClick={getFileUrl}>Upload</button>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default Upload