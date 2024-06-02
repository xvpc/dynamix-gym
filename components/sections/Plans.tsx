import React, {useState} from 'react';

// Mui
import { Button, Tooltip } from '@mui/material';

// Framer Motion
import { motion } from "framer-motion"

// Icons
import { IoIosArrowDown } from "react-icons/io";

export default function Plans({plansTitle, plans}: {plansTitle: string, plans: any[any]}) {
    const [hoverIndex, setHoverIndex]= useState<number | null>(null);

    const [showButton, setShowButton] = useState<boolean>(true);
    const [slicePlans, setSlicePlans] = useState<number>(5);

    const handleShowMore = () => {
        if(slicePlans < plans.length){
            setSlicePlans(prev => prev + 5);

        }else{
            setShowButton(false);
        }
    }

    return (
        <div id='plans' className='d-flex flex-column justify-content-center align-items-center gap-4 text-center'>
            <h2 className='p-0 m-0 fw-bold'>{plansTitle}</h2>
            <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
                <div className='row row-cols-1 row-cols-sm-2 container g-3 justify-content-center'>
                    {
                        plans.slice(0, slicePlans).map((items: any, index: number) => {
                            return(
                                <motion.div 
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                initial={{ y: 0, x: 0, opacity: 0 }}
                                animate={hoverIndex == index ? { y: -35, x: 0 } : { y: 0, x: 0 }} 
                                transition={{duration: 0.5}} 
                                onHoverStart={() => setHoverIndex(index)} onHoverEnd={() => setHoverIndex(null)} 
                                key={index} style={{cursor: "pointer"}} 
                                onClick={() => document?.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}
                                className='overflow-hidden'>
                                    <div className='w-100 h-100 d-flex flex-column justify-content-around align-items-center px-2 py-4 bg-black bg-opacity-75 rounded overflow-hidden'>
                                        <div className='d-flex flex-column text-center gap-2 pb-3'>
                                            <h6 className='p-0 m-0 fw-bold'>{items.period}</h6>
                                            <div className='p-3 mb-3 border-bottom border-1 border-opacity-25 border-secondary'>
                                                <Tooltip title={items.info || ""} arrow>
                                                    <p className='p-0 m-0 text-truncate text-wrap text-secondary'>{items.info || ""}</p>
                                                </Tooltip>
                                            </div>
                                            <p className='p-0 m-0 text-white-50 mb-2 fw-bold'>${items.price}</p>
                                            {
                                                (items.plan == "Gold" || items.plan == "ذهبي") ?
                                                <Button color='warning' variant="outlined">Gold</Button> :
                                                <Button color='info' variant="outlined">{items.plan}</Button>
                                            }
                                        </div>
                                    </div>

                                </motion.div>
                            );
                        })
                    }
                </div>
                {/* {showButton && 
                <Button onClick={handleShowMore} variant="outlined" startIcon={<IoIosArrowDown />}>
                    Show More
                </Button>
                } */}
            </div>
        </div>
    )
}
