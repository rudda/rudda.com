import { Button, Flex, Text } from "@chakra-ui/react";

export function Course() {
    return (
        <Flex
            id='course'
            w={{ base: '100%', xl: '100%' }}
            h='394px'
            backgroundImage="url('/img/curso_bg.svg')"
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            alignItems={'center'}
            justifyContent='center'
        >
            <Flex
                w={{ base: '100%', xl: '1120px' }}
                margin='0 auto'
                flexDir='column'
                align={{ base: 'center', xl: 'normal' }}
            >
                <Text
                    w={{ base: '90%', xl: '602px' }}
                    fontSize={{ base: '1.25rem', xl: '2.5rem' }}
                    textAlign={{ base: 'center', xl: 'start' }}
                    fontWeight='bold'
                    color='white'
                    mb='1rem'
                >
                    Quer dar os primeiros passos
                    no mundo da programação?
                </Text>
                <Text
                    w={{ base: '100%', xl: '418px' }}
                    fontSize={{ base: '1rem', xl: '1.175rem' }}
                    textAlign={{ base: 'center', xl: 'start' }}
                    color='#696868'
                    mb='48px'
                >
                    Curso gratuíto de lógica de programação
                    utilizando a linguagem Python.
                </Text>
                <Button w='230px' h='54px' bg='#6FFF75'>Em breve</Button>
            </Flex>
        </Flex>
    )
}