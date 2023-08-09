import { Image, Flex, Heading, Text, Wrap, WrapItem, Center } from "@chakra-ui/react";

export function Technologies() {
    return (
        <Flex
            flexDir='column'
            w={{ base: '100%', xl: '1120px' }}
            alignItems='center'
            mt={{ base: '4rem', xl: '130px' }}
            mb={{ base: '4rem', xl: '80px' }}
        >
            <Heading
                bgGradient='linear(to-l, #585DE2, #6FFF75)'
                bgClip='text'
                fontSize={{ base: '2rem', xl: '4rem' }}
                mb={{ base: '1rem', xl: '2rem' }}
            >
                Tecnologias
            </Heading>
            <Text
                w={{ base: '90%', xl: '1120px' }}
                h={{ base: '100%' }}
                color='#8A8A8E'
                fontSize={{ base: '1rem', xl: '1.5rem' }}
                textAlign='center'
                mb={{ base: '2rem', xl: '44px' }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi laoreet quam habitant in id. Nunc
                morbi ullamcorper pellentesque ipsum vitae.
            </Text>

            <Flex
                w={{ base: '90%', xl: '1120px' }}
                flexWrap={{ base: 'wrap', xl: 'nowrap' }}
                justifyContent={{ base: 'center' }}
            >
                <Image mr={{ base: '1rem', xl: '12px' }} mb={{ base: '1rem', xl: '0' }} w='150px' h='87px' borderRadius='8px' src='/img/tec_android.svg' alt="Logomarca Android" />
                <Image mr={{ base: '1rem', xl: '12px' }} mb={{ base: '1rem', xl: '0' }} w='150px' h='87px' borderRadius='8px' src='/img/tec_kotlin.svg' alt="Logomarca Kotlin" />
                <Image mr={{ base: '1rem', xl: '12px' }} mb={{ base: '1rem', xl: '0' }} w='150px' h='87px' borderRadius='8px' src='/img/tec_node.svg' alt="Logomarca Node" />
                <Image mr={{ base: '1rem', xl: '12px' }} mb={{ base: '1rem', xl: '0' }} w='150px' h='87px' borderRadius='8px' src='/img/tec_docker.svg' alt="Logomarca Docker" />
                <Image mr={{ base: '1rem', xl: '12px' }} mb={{ base: '1rem', xl: '0' }} w='150px' h='87px' borderRadius='8px' src='/img/tec_php.svg' alt="Logomarca PHP" />
                <Image mr={{ base: '1rem', xl: '12px' }} mb={{ base: '1rem', xl: '0' }} w='150px' h='87px' borderRadius='8px' src='/img/tec_java.svg' alt="Logomarca Java" />
                <Image mr={{ base: '1rem', xl: '12px' }} mb={{ base: '1rem', xl: '0' }} w='150px' h='87px' borderRadius='8px' src='/img/tec_git.svg' alt="Logomarca Git" />
                <Flex mr={{ base: '1rem', xl: '12px' }} mb={{ base: '1rem', xl: '0' }} w='150px' h='87px' borderRadius='8px' />

            </Flex>
        </Flex>
    )
}