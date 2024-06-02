import React from 'react'

// Mui
import { Divider } from '@mui/material'

export default function DividerComponent({hr}: {hr?: boolean}) {
    if(hr){
        return (
            <Divider variant="middle" color='white' component="hr" />
        )
    }else{
        return <div className='py-3'></div>;
    }
}
