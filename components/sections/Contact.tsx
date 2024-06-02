import React from 'react'

// Icons
import { CgMail } from "react-icons/cg";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";

// Assets
import { assetsInfo } from '@/utils/assets';

// Framer Motion
import { motion } from "framer-motion"

export default function Contact({contact}: {contact: string}) {

    return (
        <div id="contact" style={{direction: "ltr"}} className='d-flex flex-column justify-content-center algin-items-center gap-4 pb-3'>
            <h2 className='m-0 p-0 fw-bold text-center'>{contact}</h2>
            <motion.div 
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            initial={{ y: 100, x: 0 }}
            transition={{duration: 0.5}}
            className='container py-3 d-flex flex-column flex-wrap justify-content-center algin-items-center gap-3'>
                <ul className='d-flex flex-row flex-wrap gap-4 p-0 m-0 justify-content-center algin-items-center'>
                    <li className='text-white text-start fs-5'><BsWhatsapp /> <span className='text-white-50'>{assetsInfo.whatsapp1}</span></li>
                    <li className='text-white text-start fs-5'><BsWhatsapp /> <span className='text-white-50'>{assetsInfo.whatsapp2}</span></li>
                </ul>
                <ul className='d-flex flex-row flex-wrap gap-4 p-0 m-0 justify-content-center algin-items-center'>
                    <li className='text-white text-start fs-5'><AiOutlineInstagram /> <span className='text-white-50'>{assetsInfo.instagram}</span></li>
                    <li className='text-white text-start fs-5'><AiOutlineFacebook /> <span className='text-white-50'>{assetsInfo.facebook}</span></li>
                </ul>
                <ul className='d-flex flex-row flex-wrap gap-4 p-0 m-0 justify-content-center algin-items-center'>
                    <li className='text-white text-start fs-5'><CgMail /> <span className='text-white-50 text-truncate'>{assetsInfo.email}</span></li>
                </ul>
            </motion.div>
        </div>
    )
}