import { Heading, Icon, Stack, Text, VStack } from '@chakra-ui/react'
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
            <Stack>
              <FacilityCard />
            </Stack> 
        </MainWrapper>
      </TransitionWrapper>
    </>
  )
}


const FacilityCard = ({icon, heading, description, color}) => {
  return (
    <>
      <VStack background={color}>
        <Icon as={icon} w={12} h={12} />
        <Text>{heading}</Text>
        <Text>{description}</Text>
      </VStack>
    </>
  )
}
export default Home
