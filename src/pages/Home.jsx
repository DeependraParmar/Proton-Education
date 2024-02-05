import { Heading } from '@chakra-ui/react'
import React from 'react'
import TransitionWrapper from '../components/Transition'
import MainWrapper from '../components/MainWrapper'
import BottomToTop from '../components/BottomToTop'

const Home = () => {
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
