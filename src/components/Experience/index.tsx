import { Flex, Image, Text } from "@chakra-ui/react";
import Zoom from 'react-reveal/Zoom';

export function Experience() {
    return (
        <Zoom>
            <Flex
                id='experience'
                w={{ base: '100%', xl: '100%' }}
                h='550px'
                bg='#101011'
                alignItems='center'
            >
                <Flex
                    w={{ base: '95%', lg: '90%', xl: '1120px' }}
                    direction={{ base: 'column', xl: 'column' }}
                    margin='2rem auto'
                    alignItems='center'
                >
                    <Text
                        fontSize={{ base: '2rem', xl: '4rem' }}
                        color='white'
                        fontWeight='semibold'
                        mb={{ base: '1rem', xl: '2rem' }}
                        mt={{ base: '4rem' }}
                    >
                        Experiências
                    </Text>
                    <Text
                        w={{ base: '90%' }}
                        textAlign='center'
                        color='#8A8A8E'
                        fontSize={{ base: '1rem', xl: '1.5rem' }}
                        mb={{ base: '40px', xl: '80px' }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi laoreet quam habitant in id. Nunc
                        morbi ullamcorper pellentesque ipsum vitae.
                    </Text>

                    <Flex
                        w={{ base: '95%', xl: '1120px' }}
                        direction={{ base: 'column', xl: 'row' }}
                        alignItems={{ base: 'center' }}
                        mb={{ base: '3rem', xl: '4rem' }}
                    >
                        <Flex
                            w={{ base: '95%', xl: '544px' }}
                            h={{ base: '150px', xl: '184px' }}
                            bg='#FF6002'
                            borderRadius='8px'
                            mr={{ base: '0', xl: '35px' }}
                            mb={{ base: '1rem', xl: '0' }}
                        >
                            <Flex
                                w='170px'
                                bg='white'
                                alignItems='center'
                                justifyContent='center'
                                borderRadius='8px 0 0 8px'
                            >
                                <Image w='143px' h='81' src='/img/cesar.svg' alt="Logomarca Cesar" />
                            </Flex>
                            <Flex
                                flexDir='column'
                                justifyContent='center'
                                ml='1rem'
                            >
                                <Text
                                    color='white'
                                    fontWeight='bold'
                                    fontSize={{ base: '1rem', xl: '1.5rem' }}
                                >
                                    Software Engine II
                                </Text>
                                <Text
                                    color='white'
                                    fontWeight='regular'
                                    fontSize={{ base: '0.75rem', xl: '1.5rem' }}
                                >
                                    Manaus - AM
                                </Text>
                            </Flex>
                        </Flex>

                        <Flex
                            w={{ base: '95%', xl: '544px' }}
                            h={{ base: '150px', xl: '184px' }}
                            bg='#0023A4'
                            borderRadius='8px'
                        >
                            <Flex
                                w='170px'
                                bg='white'
                                alignItems='center'
                                justifyContent='center'
                                borderRadius='8px 0 0 8px'
                            >
                                <Image w='136px' h='62' src='/img/sidia.svg' alt="Logomarca Sidia" />
                            </Flex>
                            <Flex
                                flexDir='column'
                                justifyContent='center'
                                ml='1rem'
                            >
                                <Text
                                    color='white'
                                    fontWeight='bold'
                                    fontSize={{ base: '1rem', xl: '1.5rem' }}
                                >
                                    Software Engine II
                                </Text>
                                <Text
                                    color='white'
                                    fontWeight='regular'
                                    fontSize={{ base: '0.75rem', xl: '1.5rem' }}
                                >
                                    Manaus - AM
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Zoom>
    )
}