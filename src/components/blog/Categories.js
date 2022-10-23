import React from 'react'

function Categories() {
    const catOne = () => {
        document.body.classList.remove('cat-two')
        document.body.classList.remove('cat-three')
        document.body.classList.add('cat-one')
    }

    const catTwo = () => {
        document.body.classList.add('cat-two')
        document.body.classList.remove('cat-three')
        document.body.classList.remove('cat-one')
    }

    const catThree = () => {
        document.body.classList.remove('cat-two')
        document.body.classList.add('cat-three')
        document.body.classList.remove('cat-one')
    }

    const question = () => {
        document.body.classList.remove('file-active')
        document.body.classList.add('question-active')
    }

    const file = () => {
        document.body.classList.remove('question-active')
        document.body.classList.add('file-active')
    }

  return (
    <div className='refinements-container d-flex flex-column col-2 p-1'>
        <p className='section-title mb-1'>sort by category</p>
        <button onClick={catOne}>Mathematics, Surveying and Transportation Engineering</button>
        <button onClick={catTwo}>Hydraulics and Geotechnical Engineering</button>
        <button onClick={catThree}>Structural Engineering and Construction</button>
        <p className='section-title mb-1 mt-3'>sort by type</p>
        <button onClick={question}>questions</button>
        <button onClick={file}>documents</button>
    </div>
  )
}

export default Categories
