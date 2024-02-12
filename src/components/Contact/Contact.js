import {
        Container,
        Flex,
        Text,
        Button,
        Popover,
        PopoverTrigger,
        PopoverContent,
        PopoverArrow,
        PopoverCloseButton,
        PopoverHeader,
        PopoverBody } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaRegEnvelopeOpen, FaPhoneFlip } from "react-icons/fa6";

const Contact = () => {

    return (
        
        <Container maxW='1024px' marginBottom='100px'>
            <Text fontSize='2xl' marginBottom='25px'>
                Puedes contactar conmigo a través de las siguientes vías:
            </Text>
            <Flex flexDirection='row' justifyContent='space-around'  maxW='500px' margin='auto'>
                <Button colorScheme='gray' borderRadius='20' as="a" href='https://www.linkedin.com/' target='_blank'> <FaLinkedin /> </Button>   
                <Button colorScheme='gray' borderRadius='20' as="a" href='https://github.com/' target='_blank'> <FaGithub /> </Button>
                <Popover>
                    <PopoverTrigger>
                        <Button colorScheme='gray' borderRadius='20' textAlign='left'> <FaRegEnvelopeOpen /> </Button> 
                    </PopoverTrigger>
                    <PopoverContent  textAlign='left'>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Email:</PopoverHeader>
                        <PopoverBody>test@gmail.com</PopoverBody>
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger>
                    <Button colorScheme='gray' borderRadius='20'> <FaPhoneFlip /> </Button>  
                    </PopoverTrigger>
                    <PopoverContent  textAlign='left'>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Teléfono:</PopoverHeader>
                        <PopoverBody>+34 666 777 888</PopoverBody>
                    </PopoverContent>
                </Popover> 
                
            </Flex>   

        </Container>

    );
}

export default Contact;