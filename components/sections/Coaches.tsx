import React from 'react'

// Mui
import { Tooltip, useMediaQuery } from '@mui/material'

// Framer Motion
import { motion } from 'framer-motion';

// Styles
import styles from "@/styles/Home.module.css";

export default function Coaches({coachesTitle, coaches}: {coachesTitle: string, coaches: any[any]}) {
    const matchSm: boolean = useMediaQuery('(min-width:576px)');

    return (
        <div id="coaches" className='container d-flex flex-column justify-content-center algin-items-center gap-4'>
            <h2 className='p-0 m-0 fw-bold text-center'>{coachesTitle}</h2>
            <div className='container px-0 row row-cols-2 row-cols-lg-4 g-2 py-3 justify-content-start align-self-center'>
                {
                    coaches.map((item: any, index: number) => {
                        return(
                            <motion.div whileHover={{opacity: 0.8}} initial={{opacity: 1}}  key={index} style={{cursor: "pointer"}} className='overflow-hidden'>
                                <div className={`overflow-hidden w-100 h-100 rounded ${styles.cardPattern} d-flex flex-column flex-sm-row justify-content-start algin-items-center`}>
                                    <img
                                        className={`${matchSm ? "w-25" : "w-auto"} h-100`}
                                        src={item.image}
                                        alt={item.name}
                                        loading="lazy"
                                    />
                                    <div className='p-2 d-flex w-75 flex-column justify-content-around algin-items-center gap-2'>
                                        <Tooltip title={item.name || ""} arrow>
                                            <p className='p-0 m-0 fw-bold text-truncate'>{item.name || ""}</p>
                                        </Tooltip>
                                        <span className='p-0 m-0 text-white-50 text-wrap'>{item.title || ""}</span>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}
