import { Box, Button, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { headerLinks } from '../../data'
import { MdMail } from 'react-icons/md'
import { BiSolidPhoneCall as IoCall } from 'react-icons/bi'
import toast from 'react-hot-toast'

const Header = () => {
  const location = useLocation();
  return (
    <>
      <Box boxShadow={'sm'} py={'4'} px={'6'} display={['flex']} alignItems={['center']} justifyContent={['space-around']} zIndex={1000} position={'fixed'} width={'full'} top={0} >


        <NavLogo logo={logo} />
        <NavLinks location={location} />
        <NavButton />
      </Box>
    </>
  )
}

function NavButtonComponent({ name, route, location }) {
  return <Link style={{
    color: location.pathname === route ? '#5340ff' : '',
  }}
    className='navLinks width-full' to={route}>{name}</Link>
}

const NavLogo = React.memo(({ logo }) => {
  return <Link to={'/'}>
    <Box display={['flex']} alignItems={'center'} justifyContent={'center'} >
      <Image width={'10'} src={logo} borderRadius={'full'} dropShadow={'0px 0px 10px #f9c307'} />
      <Text fontWeight={'bold'} fontSize={'1.2rem'} ml={'2'} color={'#5340ff'} >Proton Education</Text>
    </Box>
  </Link>
});

const NavLinks = React.memo(({ location }) => {
  return <Box display={['none', 'none', 'flex', 'flex']} gap={['1', '2', '3', '4']} >
    {
      headerLinks.map((link, index) => {
        return <NavButtonComponent location={location} key={index} name={link.name} route={link.route} />
      })
    }
  </Box>
});
const NavButton = () => {
  const copyNumber = () => {
    navigator.clipboard.writeText('9584412188');
    toast.success("Number Copied to Clipboard")
  }
  return (<>
    <HStack>
      <Button fontSize={'sm'} className='navButton' >
        <Link to={'/contact'} ><HStack><MdMail /><span>Contact</span></HStack></Link>
      </Button>
      <Button onClick={copyNumber} fontSize={'sm'}><HStack><IoCall /><span>Call Now</span></HStack></Button>
    </HStack>
  </>
  );
}

export default Header;
