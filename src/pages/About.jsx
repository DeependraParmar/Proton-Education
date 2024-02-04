import React from 'react'
import TransitionWrapper from '../components/Transition'
import MainWrapper from '../components/MainWrapper'
import { Box, Heading, ListItem, Stack, Text, UnorderedList, VStack } from '@chakra-ui/react'
import { FaEye } from 'react-icons/fa'
import { TbTargetArrow } from 'react-icons/tb'

const About = () => {
    return (
        <>
            <TransitionWrapper>
                <MainWrapper pt={24} pb={12}>
                    <VStack width={['90%','90%','90%','90%']} margin={'auto'} alignItems={'flex-start'} fontSize={['sm', 'sm', 'md', 'md']} gap={'4'}>
                        <Heading width={'full'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'} >About <Text display={'inline'} fontSize={['2rem', '2.2rem', '2.2rem', '2.5rem']} color={'#5340ff'}>Proton</Text></Heading>

                        <Box>
                            <Text>Welcome to <b>Proton Education</b>, Dewas' Premier Coaching Class for 8th to 12th Science and PCMB!
                                <br />
                                At Proton Educations, we take pride in being the leading destination for students aspiring to excel in 8th to 12th-grade Science and PCMB subjects in Dewas. Our commitment to academic excellence, innovative teaching methodologies, and a nurturing learning environment set us apart as the best coaching class for Science enthusiasts.
                            </Text>
                        </Box>

                        <Stack borderRadius={'10px'} p={'2'} background={'rgb(232, 255, 246)'} flexDir={['column', 'column', 'row', 'row']} justifyContent={'center'} alignItems={'center'} gap={[2, 2, 6, 6]}>
                            <VStack width={['100%', '100%', '11%', '11%']} borderRadius={'10px'} p={'1.5rem'} background={'#d3ffee'}>
                                <FaEye size={'20'} />
                                <Text fontSize={'sm'}>Vision</Text>
                            </VStack>

                            <Text p={[2,2,0,0]} fontSize={'sm'}>Our vision is to empower students with the knowledge, skills, and confidence to achieve their academic goals and pursue successful careers in the fields of Science, Engineering, and Medicine. We aim to instill a love for learning and a passion for discovery, inspiring students to become lifelong learners and critical thinkers.</Text>
                        </Stack>


                        <Stack borderRadius={'10px'} p={'2'} background={'rgb(241, 250, 255)'} flexDir={['column','column','row','row']} justifyContent={'center'} alignItems={'center'} gap={[2,2,6,6]}>
                            <VStack width={['100%','100%','10%','10%']} borderRadius={'10px'} p={'1.5rem'} background={'#daf2ff'}>
                                <TbTargetArrow size={'20'} />
                                <Text fontSize={'sm'}>Mission</Text>
                            </VStack>

                            <Text p={[2, 2, 0, 0]} fontSize={'sm'}>Our mission is to empower students with the knowledge, skills, and mindset needed to thrive academically and personally. We are dedicated to cultivating a learning environment that fosters curiosity, critical thinking, and a passion for excellence.</Text>
                        </Stack>

                        <Text mt={'8'} fontSize={['md','md','lg','lg']} fontWeight={'bold'}>Why Proton Education?</Text>
                        <UnorderedList pl={'8'} spacing={'3'}>
                            <ListItem><b>Holistic Learning: </b>We believe in providing holistic education that goes beyond textbooks. Our comprehensive curriculum ensures a deep understanding of scientific concepts while fostering critical thinking and problem-solving skills.</ListItem>
                            <ListItem><b>Experienced Faculty: </b>Our team of experienced and dedicated faculty members comprises subject experts who are passionate about teaching. They guide students through the complexities of Science and PCMB with clarity and enthusiasm.</ListItem>
                            <ListItem><b>Customized Approach: </b>Recognizing that every student is unique, we adopt a personalized approach to cater to individual learning needs. Our small class sizes facilitate one-on-one interactions, ensuring that each student receives the attention they deserve.</ListItem>
                            <ListItem><b>Proven Track Record: </b>Over the years, Proton Educations has garnered a reputation for producing academic achievers. Our success stories stand as a testament to the effectiveness of our teaching methodologies and the dedication of our students.</ListItem>
                            <ListItem><b>Focused PCMB Coaching: </b>For students pursuing the PCMB stream, our coaching program is tailored to provide a strong foundation in Physics, Chemistry, Mathematics, and Biology. We strive to nurture the next generation of scientists, engineers, and medical professionals.</ListItem>
                            <ListItem><b>Short-Concise Notes: </b>Providing short, concise and to the point notes which will help you ace the exam of your choice.</ListItem>
                        </UnorderedList>
                    </VStack>
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}

export default About
