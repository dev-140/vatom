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
    <div>
        <button onClick={catOne}>one</button>
        <button onClick={catTwo}>two</button>
        <button onClick={catThree}>three</button>
        <button onClick={question}>questions</button>
        <button onClick={file}>documents</button>
    </div>
  )
}

export default Categories
