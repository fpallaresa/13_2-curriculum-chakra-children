import './About.css'
import { Container, Flex,  Heading, Text, Highlight } from '@chakra-ui/react'
import { FaArrowRight } from "react-icons/fa6";

const About = () => {

    return (
        <Container textAlign='left' maxW='1024px' width='600px' margin='0 auto 100px' >
            <Flex flexDirection='column' justifyContent='space-evenly'  textAlign='left' width='100%'>
                <Heading fontSize='3xl' marginBottom='25px'>Menganito García</Heading>
                <Text fontSize='xl' fontWeight='700' marginBottom='25px'>
                    <FaArrowRight className='arrow' size='14px' color='var(--chakra-colors-blue-400)'/><Highlight query={['Empleo:']} styles={{ color: 'var(--chakra-colors-blue-400)' }}> Empleo: Desarrollador Web Fullstack</Highlight>
                </Text>
                <Text fontSize='xl' fontWeight='700' marginBottom='25px'>
                    <FaArrowRight className='arrow' size='14px' color='var(--chakra-colors-blue-400)'/><Highlight query={['Fecha de nacimiento:']} styles={{ color: 'var(--chakra-colors-blue-400)' }}> Fecha de nacimiento: 01/01/1970</Highlight>
                </Text>
                <Text fontSize='xl' fontWeight='700' marginBottom='25px'>
                    <FaArrowRight className='arrow' size='14px' color='var(--chakra-colors-blue-400)'/><Highlight query={['Localización:']} styles={{ color: 'var(--chakra-colors-blue-400)' }}> Localización: Madrid, España</Highlight>
                </Text>
                <Text fontSize='lg'>
                    Desde temprana edad, siempre he sido un apasionado de la tecnología y de cómo esta puede transformar
                    el mundo que nos rodea. A medida que fui creciendo, mi curiosidad y sed de conocimineto me llevaron
                    a adentrarme en el mundo de la programación, donde he encontrado una fascinante forma de crear y
                    dar vida a ideas innovadoras.
                </Text>
            </Flex>
        </Container>
    );
}

export default About;