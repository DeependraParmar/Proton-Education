import { Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillMail } from 'react-icons/ai'
import { FaPhone, FaPhoneAlt } from 'react-icons/fa'
import MainWrapper from '../components/MainWrapper'
import TransitionWrapper from '../components/Transition'
import toast from 'react-hot-toast'
import { facultyDetails } from '../data'

const Faculty = () => {
    return (
        <>
            <TransitionWrapper>
                <MainWrapper pt={24} pb={12}>
                    <VStack gap={[6, 6, 8, 8]}>
                        <Heading width={'full'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'} >Our <Text display={'inline'} fontSize={['2rem', '2.2rem', '2.2rem', '2.5rem']} color={'#5340ff'}>Elite Faculty</Text></Heading>

                        <Stack flexDirection={['column','column','row','row']} justifyContent={['flex-start','flex-start','center','center']} alignItems={['center','center','flex-start','flex-start']} width={'full'} gap={8} >
                            {
                                facultyDetails.map((faculty, index) => {
                                    return (
                                        <FacultyCard name={faculty.name} education={faculty.education} school={faculty.school} designation={faculty.designation} experience={faculty.experience} image={faculty.image} phoneNumber={faculty.phoneNumber} email={faculty.email} />
                                    )
                                })
                            }
                        </Stack>
                    </VStack>
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}

const FacultyCard = ({ image, name, education, experience,designation, school, phoneNumber, email }) => {
    const copyPhone = () => {
        navigator.clipboard.writeText(phoneNumber);
        toast.success("Number Copied to Clipboard");
    }
    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        toast.success("Email Copied to Clipboard");
    }

    return (<>
        <VStack boxShadow={'0px 0px 10px rgb(0,0,0,0.1)'} borderRadius={'10px'} width={['90%', '90%', '20%', '20%']} gap={4}>
            <Image width={'100%'} src={image} />
            <VStack gap={0}>
                <Text fontSize={'1.2rem'} color={'#5340ff'} fontWeight={'bold'}>{name}</Text>
                {
                    designation && <Text fontSize={'sm'} fontWeight={'bold'}>{designation}</Text>
                }
                <Text fontSize={'sm'}>{education}</Text>
                <Text fontSize={'sm'}>{school}</Text>
                <Text fontSize={'sm'}>Experience: <b>{experience}+ Years</b></Text>
                <HStack my={2}>
                    <Button onClick={copyEmail} size={'sm'} variant={'ghost'}><AiFillMail /></Button>
                    <Button onClick={copyPhone} size={'sm'} variant={'ghost'}><FaPhoneAlt /></Button>
                </HStack>
            </VStack>
        </VStack>
    </>)
}
export default Faculty
