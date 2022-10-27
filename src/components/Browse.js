import React from 'react'
import BlogMain from './blog/BlogMain'
import Categories from './blog/Categories'
import Loading from './loading/Loading'
import { motion } from "framer-motion"
import Padding from './dividers/Padding'

function Browse() {
    return (
        <>
            <motion.div className='browse-main-container h-100 pt-0' initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ delay: .1}}>
                <Loading />
                <div className='container'>
                    <div className='col-12 mx-auto'>
                        <div className='d-flex flex-column flex-md-row'>
                            <Categories />
                            <BlogMain />
                        </div>
                    </div>
                </div>
            </motion.div>
            <Padding />
        </>
    )
}

export default Browse