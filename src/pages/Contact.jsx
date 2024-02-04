import { Box, Button, Divider, Heading, Input, InputGroup, InputLeftElement, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, UnorderedList, VStack, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { BiSolidSend } from 'react-icons/bi'
import { MdClose, MdLockOpen } from 'react-icons/md'
import MainWrapper from '../components/MainWrapper'
import TransitionWrapper from '../components/Transition'

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [message, setMessage] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    const [otp, setOtp] = useState();
    const [verEmail, setVerEmail] = useState("");

    const { isOpen, onOpen, onClose } = useDisclosure();

    const sendOTP = async (e) => {
        e.preventDefault();
        setIsClicked(true);
        try {
            console.log({name, email, phoneNumber, message});
            const res = await axios.post('https://proton-education-server.onrender.com/sendmail', {
                name: name,
                email: email,
                phoneNumber: Number(phoneNumber),
                message: message,
            });

            console.log(res.data);

            if (res.data.success) {
                toast.success('OTP sent successfully. Please check your email.',{
                    duration: 5000,
                    position: "top-center",
                });
                onOpen();
                setIsClicked(false);
                setEmail('');
                setName('');
                setPhoneNumber('');
                setMessage('');
            } else {
                toast.error('Failed to send OTP. Please try again later.');
                setIsClicked(false);
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
            toast.error('An error occurred. Please try again later.');
            setIsClicked(false);
        }
    };


    const verifyOtp = async() => {
        setIsClicked(true);
        const res = await axios.post('https://proton-education-server.onrender.com/verifyotp', {
            email: verEmail,
            otp: Number(otp),
        });

        if(res.data.success){
            if(res.data.success){
                toast.success('Query sent successfully. We\'ll get in touch with you asap.')
                onClose();
                setIsClicked(false);
                setVerEmail('');
                setOtp('');
            }else{
                toast.error('Failed to send OTP. Please try again later.');
                setIsClicked(false);
            }
        }else{
            toast.error('Invalid OTP. Please try again.')
            setIsClicked(false);
        }
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
                            <Input isRequired={true} type='text' placeholder='John Doe' focusBorderColor='#5340ff' fontSize={'sm'} onChange={(e) => setName(e.target.value)} />
                        </InputGroup>
                        <InputGroup spacing='4' >
                            <InputLeftElement pointerEvents={'none'}>
                                <AiOutlineMail size='18' />
                            </InputLeftElement>
                            <Input type='email' placeholder='johndoe@gmail.com' focusBorderColor='#5340ff' fontSize={'sm'} isRequired={true} onChange={(e) => setEmail(e.target.value)} />
                        </InputGroup>
                        <InputGroup spacing='4' >
                            <InputLeftElement pointerEvents={'none'}>
                                <AiOutlineMail size='18' />
                            </InputLeftElement>
                            <Input type='number' placeholder='961758XXXX' focusBorderColor='#5340ff' fontSize={'sm'} isRequired={true} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </InputGroup>

                        <Textarea placeholder='Your message for us.' fontSize={'sm'} resize={'none'} focusBorderColor='#5340ff' isRequired={true} onChange={(e) => setMessage(e.target.value)} />

                        {
                            isClicked ? 
                                <Button isLoading onClick={e => sendOTP(e)} gap={2} className='navButton' variant='solid' fontSize={'sm'} width={'full'}>Send  <BiSolidSend /></Button>
                             : 
                                <Button isDisabled={!name || !email || !phoneNumber || !message || phoneNumber.length > 10 || phoneNumber.length < 10 ? true : false} onClick={e => sendOTP(e)} gap={2} className='navButton' variant='solid' fontSize={'sm'} width={'full'}>Send  <BiSolidSend /></Button>
                        }

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
                            <Input type='email' placeholder='johndoe@gmail.com' focusBorderColor='#5340ff' fontSize={'sm'} isRequired={true} onChange={(e) => setVerEmail(e.target.value)} />
                        </InputGroup>

                        <InputGroup spacing='4' my={3} >
                            <InputLeftElement pointerEvents={'none'}>
                                <MdLockOpen size='18' />
                            </InputLeftElement>
                            <Input type='number' placeholder='452126' focusBorderColor='#5340ff' fontSize={'sm'} isRequired={true} onChange={(e) => setOtp(e.target.value)} />
                        </InputGroup>

                    </ModalBody>

                    <ModalFooter gap={2}>
                        {
                            isClicked ?
                                <Button isLoading isDisabled={!verEmail || !otp || otp.length > 6 || otp.length < 6 ? true : false} onClick={verifyOtp} gap={2} className='navButton' variant='solid' fontSize={'sm'} width={'50%'}>Post Query   <BiSolidSend /></Button>
                            : 
                                <Button isDisabled={!verEmail || !otp || otp.length > 6 || otp.length < 6 ? true : false} onClick={verifyOtp} gap={2} className='navButton' variant='solid' fontSize={'sm'} width={'50%'}>Post Query   <BiSolidSend /></Button>
                        }
                        <Button onClick={onClose} gap={2} fontSize={'sm'} width={'50%'}>Close <MdClose size={'18'} /></Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Contact
