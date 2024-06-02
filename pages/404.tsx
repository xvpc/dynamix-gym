import React from 'react'

// NextJs
import Link from 'next/link';

// Mui
import { Button } from '@mui/material'

// Styles
import styles from "@/styles/Home.module.css";

export default function NoMatch() {
    return (
        <div className={`min-vh-100 d-flex ${styles.backgroundGradient}`}>
            <div className='m-auto text-center text-white'>
                <h1 className='fw-bold text-danger'>404 Error</h1>
                    <p className='text-white-50'>Page not found</p>
                    <Link href="/">
                        <Button variant="outlined" size="large">Home Page</Button>
                    </Link>
            </div>
        </div>
    )
}
