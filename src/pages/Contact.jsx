import React, { useState } from 'react'
import TransitionWrapper from '../components/Transition'
import MainWrapper from '../components/MainWrapper'
import { Box, Button, Divider, HStack, Heading, Input, InputGroup, InputLeftElement, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, Text, Textarea, UnorderedList, VStack, useDisclosure } from '@chakra-ui/react'
import { AiFillMail, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { MdClose, MdLockOpen, MdSend } from 'react-icons/md'
import { BiSolidSend } from 'react-icons/bi'
import toast from 'react-hot-toast'
import { FaUnlock } from 'react-icons/fa'

const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();

    const [otp, setOtp] = useState();
    const [verEmail, setVerEmail] = useState("");

    const {isOpen, onOpen, onClose} = useDisclosure();

    const sendOTP = () => {
        console.log(email, message, name, phoneNumber);
        onOpen();
        toast.success("OTP sent to your email. Please check your email and fill the OTP.", {
            duration: 5000,
            position: 'top-center',
        })
    }
    const verifyOtp = () => {
        console.log(otp, verEmail);
        toast.success("Your query has been posted. We'll get in touch with you asap.", {
            duration: 5000,
            position: 'top-center',
        })
    }

    return (
        <>
            <TransitionWrapper>
                <MainWrapper pt={24} pb={12}>
                    <VStack width={['95%', '95%', '30%', '30%']} margin={'auto'} display={'flex'} spacing={'3'}>
                        <Heading width={'full'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'} >Contact <Text display={'inline'} fontSize={['2rem', '2.2rem', '2.2rem', '2.5rem']} color={'#5340ff'}>Proton</Text></Heading>

                        <InputGroup spacing='4' >
                            <InputLeftElement pointerEvents={'none'}>
                                <AiOutlineUser size='18' />
                            </InputLeftElement>
                            <Input type='text' placeholder='John Doe' focusBorderColor='#5340ff' fontSize={'sm'} required={true} onChange={(e) => setName(e.target.value)} />
                        </InputGroup>
                        <InputGroup spacing='4' >
                            <InputLeftElement pointerEvents={'none'}>
                                <AiOutlineMail size='18' />
                            </InputLeftElement>
                            <Input type='email' placeholder='johndoe@gmail.com' focusBorderColor='#5340ff' fontSize={'sm'} required={true} onChange={(e) => setEmail(e.target.value)} />
                        </InputGroup>
                        <InputGroup spacing='4' >
                            <InputLeftElement pointerEvents={'none'}>
                                <AiOutlineMail size='18' />
                            </InputLeftElement>
                            <Input type='number' placeholder='961758XXXX' focusBorderColor='#5340ff' fontSize={'sm'} required={true} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </InputGroup>

                        <Textarea placeholder='Your message for us.' fontSize={'sm'} resize={'none'} focusBorderColor='#5340ff' onChange={(e) => setMessage(e.target.value)} />

                        <Button isDisabled={!name || !email || !phoneNumber || !message || phoneNumber.length > 10 || phoneNumber.length < 10 ? true:false} onClick={sendOTP} gap={2} className='navButton' variant='solid' fontSize={'sm'} width={'full'}>Send   <BiSolidSend /></Button>


                        <Box
                            bg="rgba(83, 64, 255,0.1)"
                            p={4}
                            border="1px"
                            borderColor="gray.100"
                            borderRadius="md"
                            textAlign="left"
                            width={'100%'}

                        >
                            <Text fontSize="md" mb={'2'} fontWeight={'semibold'} fontFamily={'Young Serif'}>Steps to Contact: ✨</Text>
                            <UnorderedList fontSize={'sm'}>
                                <ListItem>Fill all the details that are asked above.</ListItem>
                                <ListItem>Click send and we'll send on OTP on your email.</ListItem>
                                <ListItem>Check your email(spam also if not) and fill the OTP.</ListItem>
                                <ListItem>Now, press send to post us your query.</ListItem>
                                <ListItem>We'll get in touch with you asap.</ListItem>
                            </UnorderedList>
                        </Box>
                    </VStack>
                </MainWrapper>
            </TransitionWrapper>


            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text color={"#5340ff"} fontSize={'2xl'} fontWeight={'bold'}>OTP Verification</Text>
                        <Text fontSize={'xs'} fontWeight={'semibold'}>In order to post query, fill the One-Time Password sent to your mail to proceed.</Text>
                        <ModalCloseButton />
                    </ModalHeader>
                    <Divider />

                    <ModalBody>
                        <InputGroup spacing='4' my={3} >
                            <InputLeftElement pointerEvents={'none'}>
                                <AiOutlineMail size='18' />
                            </InputLeftElement>
                            <Input type='email' placeholder='johndoe@gmail.com' focusBorderColor='#5340ff' fontSize={'sm'} required={true} onChange={(e) => setVerEmail(e.target.value)} />
                        </InputGroup>

                        <InputGroup spacing='4' my={3} >
                            <InputLeftElement pointerEvents={'none'}>
                                <MdLockOpen size='18' />
                            </InputLeftElement>
                            <Input type='number' placeholder='452126' focusBorderColor='#5340ff' fontSize={'sm'} required={true} onChange={(e) => setOtp(e.target.value)} />
                        </InputGroup>

                    </ModalBody>

                    <ModalFooter gap={2}>
                        <Button isDisabled={!verEmail || !otp || otp.length > 6 || otp.length < 6 ? true : false} onClick={verifyOtp} gap={2} className='navButton' variant='solid' fontSize={'sm'} width={'50%'}>Post Query   <BiSolidSend /></Button>
                        <Button onClick={onClose} gap={2} fontSize={'sm'} width={'50%'}>Close <MdClose size={'18'} /></Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Contact
