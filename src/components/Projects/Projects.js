import React from "react";
import {
  Container,
  Text,
  Button,
  Image,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const Projects = () => {
  const {isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1} = useDisclosure();
  const {isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2} = useDisclosure();
  const {isOpen: isOpen3, onOpen: onOpen3, onClose: onClose3} = useDisclosure();
  const {isOpen: isOpen4, onOpen: onOpen4, onClose: onClose4} = useDisclosure();

  return (
    <Container maxW='1200px' margin=' 0 auto 100px' padding='0'>
      <Text fontSize='2xl' marginBottom='25px'>
        Estos son algunos de mis mejores proyectos:
      </Text>
      <Flex flexWrap='wrap' gap='20' justifyContent='center'>
        <Image
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/235b74188513023.659fd8efeeac6.png"
          alt="Guest Corner - UI/UX"
          htmlWidth="550px"
          borderRadius="6"
          onClick={onOpen1}
          cursor='pointer'
        />
        <Image
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/680aca189900125.65b2603248369.png"
          alt="Crux.so"
          htmlWidth="550px"
          borderRadius="6"
          onClick={onOpen2}
          cursor='pointer'
        />
        <Image
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/0a2813188384005.65a8c2cc66c0e.png"
          alt="Virage.ai"
          htmlWidth="550px"
          borderRadius="6"
          onClick={onOpen3}
          cursor='pointer'
        />
        <Image
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/806a9c190189357.65bca8930efeb.jpg"
          alt="peila.co.il"
          htmlWidth="550px"
          borderRadius="6"
          onClick={onOpen4}
          cursor='pointer'
        />
      </Flex>

      <Modal onClose={onClose1} isOpen={isOpen1} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color='var(--chakra-colors-blue-400)'>Guest Corner - UI/UX</ModalHeader>
          <ModalCloseButton />
          <ModalBody>El objetivo de nuestro servicio de conserjería es permitirle optimizar su inversión inmobiliaria
            y sus ingresos: nuestros servicios se encargan de toda la gestión de su alquiler de corta duración,
            sin esfuerzo por su parte y para alquileres exitosos
            </ModalBody>
          <ModalFooter>
            <Button onClick={onClose1} color='var(--chakra-colors-blue-400)'>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal onClose={onClose2} isOpen={isOpen2} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color='var(--chakra-colors-blue-400)'>Crux.so</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Trabajo de ciberseguridad, a tu manera. Conectamos a personas increíbles con trabajos
            de ciberseguridad que les encantarán</ModalBody>
          <ModalFooter>
            <Button onClick={onClose2} color='var(--chakra-colors-blue-400)'>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal onClose={onClose3} isOpen={isOpen3} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color='var(--chakra-colors-blue-400)'>Virage.ai</ModalHeader>
          <ModalCloseButton />
          <ModalBody>viarge.ai se erige como un centro dinámico para los entusiastas del ciclismo,
            que combina a la perfección tecnología y exploración.
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose3} color='var(--chakra-colors-blue-400)'>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal onClose={onClose4} isOpen={isOpen4} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color='var(--chakra-colors-blue-400)'>Peila.co.il</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Peila se dedica a brindar soluciones integrales para todas las necesidades de redes
            e informática de IoT de vanguardia . Entendemos los desafíos únicos de este dominio y ofrecemos
            diseño y fabricación de hardware , integración de sistemas y soporte técnico integral.
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose4} color='var(--chakra-colors-blue-400)'>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Projects;
