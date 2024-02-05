import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const BottomToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {
                showButton && <Button size={'md'} boxShadow={'10px 10px 10px rgba(0,0,0,0.2)'} className='navButton' onClick={scrollToTop} position={'fixed'} bottom={[8,8,12,12]} right={[8,8,12,12]}><FaArrowUp /></Button>
            }
        </>
    )
}

export default BottomToTop;
