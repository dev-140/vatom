import React from 'react'
import { motion } from 'framer-motion'

function ErrorPage() {
  return (
    <div className='pt-0 h-100 d-flex flex-column align-items-center justify-content-center'>
      <motion.h1 className='purple-heading' initial={{ scale: 0 }} animate={{ scale: 1}} transition={{delay: 0.5, default: { ease: "linear" }}}>404</motion.h1>
      <motion.p className='purple-sub-heading' initial={{ scale: 0 }} animate={{ scale: 1}} transition={{delay: 0.6, default: { ease: "linear" }}}>PAGE NOT FOUND!</motion.p>
    </div>
  )
}

export default ErrorPage