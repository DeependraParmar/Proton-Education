import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Image, Menu, MenuGroup, MenuItem, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { headerLinks } from '../../data'
import { MdMail, MdOutlineInfo, MdOutlineMenu } from 'react-icons/md'
import { BiSolidPhoneCall as IoCall } from 'react-icons/bi'
import toast from 'react-hot-toast'
import { GrClose } from 'react-icons/gr'
import { AiOutlineHome } from 'react-icons/ai'
import { HiMenuAlt1 } from 'react-icons/hi'
import { FaChalkboardTeacher } from 'react-icons/fa'

const Header = () => {
  const location = useLocation();
  return (
    <>
      <Box boxShadow={'sm'} py={'4'} px={'6'} display={['flex']} alignItems={['center']} justifyContent={['space-between', 'space-between', 'space-around', 'space-around']} zIndex={1000} position={'fixed'} width={'full'} top={0} >

        <NavLogo logo={logo} />
        <NavLinks location={location} />
        <NavButton />
        <HamburgerButton logo={logo} />
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
    <HStack display={['none', 'none', 'flex', 'flex']} gap={4}>
      <Button fontSize={'sm'} className='navButton' >
        <Link to={'/contact'} ><HStack><MdMail /><span>Contact</span></HStack></Link>
      </Button>
      <Button onClick={copyNumber} fontSize={'sm'}><HStack><IoCall /><span>Call Now</span></HStack></Button>
    </HStack>
  </>
  );
}

const HamburgerButton = ({ logo }) => {
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const btnRef = React.useRef();

  const copyNumber = () => {
    navigator.clipboard.writeText('9584412188');
    toast.success("Number Copied to Clipboard")
  }
  return (
    <>
      <Button ref={btnRef} display={['block', 'block', 'none', 'none']} onClick={onDrawerOpen} className='navButton'><MdOutlineMenu size={'20'} /></Button>


      <Drawer finalFocusRef={btnRef} placement="left" isOpen={isDrawerOpen} onClose={onDrawerClose}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'2px'}>
            <Link to={'/'} onClick={onDrawerClose}>
              <Box display={['flex']} alignItems={'center'} justifyContent={'flex-start'} >
                <Image width={'10'} src={logo} borderRadius={'full'} dropShadow={'0px 0px 10px #f9c307'} />
                <Text fontWeight={'bold'} fontSize={'1.2rem'} ml={'2'} color={'#5340ff'} >Proton Education</Text>
              </Box>
            </Link>
            <Button colorScheme='gray' size={'sm'} position={'absolute'} right={'5'} top={'4'} onClick={onDrawerClose} >
              <GrClose />
            </Button>
          </DrawerHeader>

          <DrawerBody >
            <VStack height={'95%'} width={'100%'} alignItems={'flex-start'} justifyContent={'space-between'}>
              <HStack width={'full'}>
                <Menu>
                  <MenuGroup >
                    <MenuItem fontSize={'sm'} className='width-full' fontWeight={'500'} onClick={onDrawerClose} _hover={{ borderRadius: '10px', bg: "rgba(83, 64, 255,0.2)", color: 'rgb(83,64,255)' }} gap={'2'}><AiOutlineHome size={'20'} /><Link className='width-full' to={'/'}> Home</Link></MenuItem>
                    <MenuItem fontSize={'sm'} className='width-full' fontWeight={'500'} onClick={onDrawerClose} _hover={{ borderRadius: '10px', bg: "rgba(83, 64, 255,0.2)", color: 'rgb(83,64,255)' }} gap={'2'}><MdOutlineInfo size={'20'} /> <Link className='width-full' to={'/about'}>About</Link></MenuItem>
                    <MenuItem fontSize={'sm'} className='width-full' fontWeight={'500'} onClick={onDrawerClose} _hover={{ borderRadius: '10px', bg: "rgba(83, 64, 255,0.2)", color: 'rgb(83,64,255)' }} gap={'2'}><HiMenuAlt1 size={'20'} /> <Link className='width-full' to={'/facility'}>Facility</Link></MenuItem>
                    <MenuItem fontSize={'sm'} className='width-full' fontWeight={'500'} onClick={onDrawerClose} _hover={{ borderRadius: '10px', bg: "rgba(83, 64, 255,0.2)", color: 'rgb(83,64,255)' }} gap={'2'}><FaChalkboardTeacher size={'20'} /> <Link className='width-full' to={'/faculty'}>Faculty</Link></MenuItem>
                  </MenuGroup>
                </Menu>
              </HStack>

              <HStack display={'flex'} gap={4}>
                <Button fontSize={'sm'} className='navButton' onClick={onDrawerClose} >
                  <Link to={'/contact'} ><HStack><MdMail size={18} /><span>Contact</span></HStack></Link>
                </Button>
                <Button onClick={copyNumber} fontSize={'sm'}><HStack><IoCall size={18} /><span>Call Now</span></HStack></Button>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header;
