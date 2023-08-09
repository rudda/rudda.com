import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Footer() {
    return (
        <Flex
            id='contact'
            w='100%'
            flexDir='column'
            bg='#101011'
            alignItems='center'
            justifyContent='center'
            mt='48px'
        >
            <Flex
                mt={{ base: '2rem', xl: '95px' }}
                w={{ base: '95%', xl: '1120px' }}
                direction={{ base: 'column', lg: 'column', xl: 'row' }}
                align={{ base: 'center', xl: 'normal' }}
                justify='center'
            >
                <Text
                    w='285px'
                    color='white'
                    fontSize={{ base: '2rem', xl: '4rem' }}
                    fontWeight='bold'
                    mr={{ base: 0, xl: '121.47px' }}
                    textAlign={{ base: 'center', xl: 'initial' }}
                    mb={{ base: '1rem', xl: '0' }}

                >
                    Ruddá <br />
                    Beltrão<Text as='span' color='#6FFF75'>.</Text>
                </Text>

                {/* MENU */}
                <Flex
                    w='114.87px'
                    flexDir='column'
                    mr={{ base: 0, xl: '121.5px' }}
                    align={{ base: 'center', xl: 'normal' }}
                >
                    <Text
                        color='#585DE2'
                        fontSize='1.5rem'
                        fontWeight='semibold'
                        mb='24px'
                    >
                        Menu
                    </Text>
                    <Text fontSize='1rem' color='#696868' mb='16px'><Link href='#heading'>Home</Link></Text>
                    <Text fontSize='1rem' color='#696868' mb='16px'><Link href='#about'>Sobre</Link></Text>
                    <Text fontSize='1rem' color='#696868' mb='16px'><Link href='#appspublished'>Apps</Link></Text>
                    <Text fontSize='1rem' color='#696868' mb='16px'><Link href='#course'>Cursos</Link></Text>
                    <Text fontSize='1rem' color='#696868' mb='16px'><Link href='#articles'>Artigos</Link></Text>
                    <Text fontSize='1rem' color='#696868' mb='16px'><Link href='#experience'>Experiência</Link></Text>
                    <Text fontSize='1rem' color='#696868' mb='16px'><Link href='#contact'>Contato</Link></Text>
                </Flex>

                {/* SOCIAL */}
                <Flex
                    w='189.98px'
                    flexDir='column'
                    mr={{ base: 0, xl: '121.5px' }}
                    align={{ base: 'center', xl: 'normal' }}
                >
                    <Text
                        color='#585DE2'
                        fontSize='1.5rem'
                        fontWeight='semibold'
                        mb='24px'
                    >
                        Redes Sociais
                    </Text>
                    <Text fontSize='1rem' color='#696868' mb='16px'><Link href='#'>Instagram</Link></Text>
                    <Text fontSize='1rem' color='#696868' mb='16px'><Link href='#'>Medium</Link></Text>
                    <Text fontSize='1rem' color='#696868' mb='16px'><Link href='#'>YouTube</Link></Text>
                </Flex>
                {/* CONTATOS */}
                <Flex
                    w='165.68px'
                    flexDir='column'
                    align={{ base: 'center', xl: 'normal' }}
                >
                    <Text
                        color='#585DE2'
                        fontSize='1.5rem'
                        fontWeight='semibold'
                        mb='24px'
                    >
                        Contato
                    </Text>
                    <Text fontSize='1rem' color='#696868' mb='16px'><Link href='#'>rudda@gmail.com</Link></Text>
                    <Text fontSize='1rem' color='#696868' mb='16px'><Link href='#'>(92) 98765-5678</Link></Text>

                </Flex>
            </Flex>
            <Flex
                w='100%'
                h='66px'
                color='#1D1D20'
                alignItems='center'
                justifyContent='center'
                bg='#1D1D20'
            >
                <Text fontSize={{ base: '0.75rem', xl: '1rem' }} color='#696868'>© 2022 - Todos os direitos reservados</Text>
            </Flex>
        </Flex>
    )
}