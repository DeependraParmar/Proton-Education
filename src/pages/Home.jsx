import { Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import MainWrapper from '../components/MainWrapper'
import TransitionWrapper from '../components/Transition'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: 'smooth' });
  }, [])
  
  return (
    <>
      <TransitionWrapper>
        <MainWrapper pt={24} pb={12}>
          <Heading height={'100vh'}>Home</Heading>
        </MainWrapper>
      </TransitionWrapper>
    </>
  )
}

export default Home
