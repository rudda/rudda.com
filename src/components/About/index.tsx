import { Flex, Image, Text } from '@chakra-ui/react';
import Zoom from 'react-reveal/Zoom';

export function About() {
    return (
        <Zoom>
            <Flex
                id='about'
                w={{ base: '95%', lg: '90%', xl: '1120px' }}
                direction={{ base: 'column', lg: 'column', xl: 'column' }}
                mt='73px'
            >
                <Text
                    fontSize={{ base: '2rem', xl: '4rem' }}
                    fontWeight='bold'
                    bgGradient='linear(to-l, #585DE2, #6FFF75)'
                    bgClip='text'
                    mb={{ base: '2rem', xl: '74px' }}
                    textAlign={{ base: 'center', xl: 'initial' }}
                >
                    Quem sou
                </Text>

                <Flex
                    justifyContent='space-between'
                    direction={{ base: 'column', lg: 'column', xl: 'row' }}
                    alignItems='center'
                >
                    <Image w={{ base: '24.249rem', xl: '30.499rem' }} h={{ base: '25.999rem', xl: '32.249rem' }} src='/img/avatar.svg' alt="Imagem de perfil Ruddá" />
                    <Flex
                        flexDir='column'
                        ml={{ base: '0', xl: '88.02px' }}
                    >
                        <Text
                            fontSize={{ base: '2rem', xl: '3rem' }}
                            fontWeight='semibold'
                            color='white'
                            mt={{ base: '2rem', xl: '0' }}
                            mb={{ base: '1rem', xl: '1.25rem' }}
                            textAlign={{ base: 'center', xl: 'initial' }}
                        >

                        </Text>
                        <Text
                            w={{ base: '95%', xl: '544px' }}
                            fontSize={{ base: '1rem', xl: '1.5rem' }}
                            textAlign={{ base: 'center', xl: 'initial' }}
                            color='#8A8A8E'
                            margin={{ base: '0 auto' }}
                        >
                            Sólida experiência na criação de aplicativos Android, manutenção e publicação na Google Play Store.
                            Experimente na portabilidade Android como Sistema Embarcado. Google Android Deveveloper Associate, criador de Conteúdo Tech e  Autor do Curso: Lógica de Programação em Kotlin
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Zoom>
    )
}