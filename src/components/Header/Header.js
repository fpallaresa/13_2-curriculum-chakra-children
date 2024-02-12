import { Container, Flex,  Heading, Text,  Image } from '@chakra-ui/react'

const Header = () => {

    const styles = {
        gradientText: {
            background: 'linear-gradient(52deg, rgba(159,122,234,1) 0%, rgba(43,108,176,1) 46%, rgba(118,228,247,1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
    };

    return (

        <Container maxW='1024px' marginBottom='100px' textAlign='left'>
            <Flex flexDirection='row' justifyContent='space-around'>
                <Flex flexDirection='column' justifyContent='space-evenly' alignItems='flex-start'>
                    <Heading as='h1' size='2xl'>Hola, me llamo</Heading>
                    <Heading as='h2' size='3xl' lineHeight='1.4' style={styles.gradientText}>Menganito Garcia</Heading>
                    <Text fontSize='xl' color='var(--chakra-colors-gray-400)'>
                        Soy desarrollador web full stack en Madrid
                    </Text>
                </Flex>
                <Image
                    src='https://www.shutterstock.com/shutterstock/photos/2411922977/display_1500/stock-photo-confident-mature-s-businessman-talking-on-phone-sitting-at-the-desk-with-laptop-in-office-2411922977.jpg'
                    alt='Menganito Garcia'
                    htmlWidth='300px'
                    borderRadius='6' />
            </Flex>
        </Container>

    );
}

export default Header;