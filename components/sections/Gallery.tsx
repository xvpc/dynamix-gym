import React, { useState } from 'react'

// Mui
import { Dialog, ImageList, ImageListItem, useMediaQuery } from '@mui/material';

// Data
import gallery from '@/data/gallery.json'

// Framer Motion
import { motion } from "framer-motion"

export default function Gallery({galleryTitle}: {galleryTitle: string}) {
    const matchSm: boolean = useMediaQuery('(min-width:576px)');
    
    const [diaLogInfo, setDiaLogInfo] = useState({
        open: false,
        index: 0
    });
    
    const handleClick = (index: number) => {
        setDiaLogInfo(prev => ({...prev, open: true, index: index}))
    }
    const handleClose = (index: number) => {
        setDiaLogInfo(prev => ({...prev, open: false}))
    }

    return (
        <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ y: 0, x: 0, opacity: 0 }}
            id="gallery" className='container d-flex flex-column justify-content-center align-items-center gap-4'>
            <div className={""}>
                <h2 className='p-0 m-0 fw-bold'>{galleryTitle}</h2>
            </div>
            <ImageList sx={{ width: "100%", height: matchSm? 450:290 }} gap={5} cols={2} rowHeight={164}>
                {gallery.data.map((item: any, index:number) => (
                    <ImageListItem onClick={() => handleClick(index)} key={item.image}>
                        <img
                            className='position-relativee img-fluid h-100'
                            src={item.image}
                            srcSet={item.image}
                            alt={item.title}
                            loading="lazy"
                        />
                        <div className='p-0 m-0 position-absolute bg-dark bg-opacity-50 w-100 h-100'></div>
                    </ImageListItem>
                ))}
            </ImageList>

            <Dialog
            open={diaLogInfo.open}
            onClose={handleClose}
            // fullScreen={fullScreen}
            >
                <img
                    className='position-relativee img-fluid h-100'
                    src={gallery.data[0]["image"]}
                    srcSet={gallery.data[0]["image"]}
                    alt={gallery.data[0]["title"]}
                    loading="lazy"
                />
            </Dialog>
        </motion.div>
    );
}
