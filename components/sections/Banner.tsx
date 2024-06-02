import React, { LegacyRef } from 'react'

// Assets
import { assetsInfo } from '@/utils/assets';

// Mui
// import { useMediaQuery } from '@mui/material';

// Parallax
import { useParallax } from 'react-scroll-parallax';

// Styles
import styles from "@/styles/Home.module.css";

export default function Banner({description, title, shortTitle}: {description: string, title: string, shortTitle: string}) {
    // const matchSm: boolean = useMediaQuery('(min-width:390px)');

    const parallax = useParallax({
        speed: -5,
        // translateY: ['0px', '0px'],
        scale: [1, 1.2],
    });
    
    return (
        <div style={{height: "290px",  backgroundImage: `url('${assetsInfo.bannerImage}')`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", backgroundColor: "grey"}} className={`w-100 position-relative ${styles.bannerPattern}`} ref={parallax.ref as LegacyRef<HTMLDivElement>}>
            {/* <img className='h-100 position-absolute w-100' src="/images/placeholder2.png" alt="" loading='lazy' /> */}
            <div className='position-absolute start-50 top-50 translate-middle d-flex flex-column justify-content-center algin-items-center gap-2'>
                <h1 style={{filter: "drop-shadow(10px 12px 10px black)", fontFamily: "'Anton', var(--font-family)"}} className='display-3 text-center text-white text-nowrap fw-bolder m-0 p-0'>{shortTitle}</h1>
                <p className='text-truncate text-wrap text-center text-white fw-light text-center overflow-hidden h-25'>
                    {description}
                </p>
            </div>
            <div className='position-absolute w-100 h-100 bg-black bg-opacity-50'></div>
        </div>
    )
}
