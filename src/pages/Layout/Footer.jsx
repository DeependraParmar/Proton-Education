import { Box, Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
          <Stack background={'#1e1e1e'} alignItems={'center'} justifyContent={['center','center','space-between','space-around']} fontSize={'sm'} color={'gray'} p={'4'}>
            <Box>
                <Text>Proton Education @{new Date().getUTCFullYear()} | All Rights Reserved </Text>
            </Box>
        </Stack> 
    </>
  )
}

export default Footer
