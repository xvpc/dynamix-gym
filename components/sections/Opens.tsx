import React from 'react'

// Framer Motion
import { motion } from "framer-motion"

export default function Opens({opens}: {opens: string}) {

    return (
        <div id="opens" className='d-flex flex-column justify-content-center algin-items-center gap-4'>
            <h2 className='m-0 p-0 fw-bold text-center'>{opens}</h2>
            <motion.ul
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                initial={{ y: 0, x: 0, opacity: 0 }}
                className='container row row-cols-1 row-cols-md-2 g-3 py-3 px-5 justify-content-start align-items-center m-auto'>
                <li className='text-white text-nowrap text-center'>Monday <span className='text-secondary'>10am-10pm</span></li>
                <li className='text-white text-nowrap text-center'>Tuesday <span className='text-secondary'>10am-8pm</span></li>
                <li className='text-white text-nowrap text-center'>Wednesday <span className='text-secondary'>10am-9pm</span></li>
                <li className='text-white text-nowrap text-center'>Thursday <span className='text-secondary'>10am-10pm</span></li>
                <li className='text-white text-nowrap text-center'>Friday <span className='text-secondary'>12AM-8PM</span></li>
                <li className='text-white text-nowrap text-center'>Saturday <span className='text-secondary'>FREE</span></li>
                <li className='text-white text-nowrap text-center'>Sunday <span className='text-secondary'>10am-10pm</span></li>
            </motion.ul>
        </div>
    )
}
