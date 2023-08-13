import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export function Heading() {
    return (
        <Box
            id='heading'
            w={{ base: '100%', xl: '100%' }}
            h='608px'
            backgroundImage="url('/img/ondas.png')"
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            alignItems='center'
            justifyContent='center'
        >
            <Flex
                margin={'81px auto'}
                w={{ base: '95%', xl: '1120px' }}
                direction={{ base: 'column', lg: 'column' }}
                alignItems={{ base: 'center', xl: 'initial' }}
            >
                <Flex
                    w='116px'
                    h='4px'
                    bg='white'
                    mb='2rem'
                ></Flex>
                <Text
                    color='white'
                    fontSize={{ base: '3rem', xl: '4rem' }}
                    fontWeight='bold'
                    mb='1rem'
                    textAlign={{ base: 'center', xl: 'initial' }}
                >
                    Ruddá<br />
                    Beltrão<Text as='span' color='#6FFF75'>.</Text>
                </Text>
                <Text
                    w={{ base: '95%', xl: '445px' }}
                    fontSize={{ base: '1.125rem', xl: '1.25rem' }}
                    color='#AAAAB1'
                    textAlign={{ base: 'center', xl: 'initial' }}
                    mb='40px'
                >
                   
                </Text>
                <Button
                    w='190px'
                    h='46px'
                    bg='#ff0000'
                    color='white'
                    onClick={() => window.location.href = 'https://www.youtube.com/@ruddabeltrao'}
                    mb={{ base: '4rem', xl: '81px' }}
                >
                    Youtube
                </Button>

                <Flex
                    align='center'
                    mb={{ base: '2rem', xl: '64px' }}
                    flexDir={{ base: 'column', xl: 'row' }}>
                    <Flex
                        alignItems='baseline'
                        mr={{ base: '0', xl: '43px' }}
                        mb={{ base: '1rem', xl: '0' }}
                        onClick={() => window.location.href = 'https://www.linkedin.com/in/ruddabeltrao/'}
                    >
                        <Image w='28px' h='28px' src='/img/linkedin.svg' alt="" />
                        <Text
                            fontSize='20px'
                            fontWeight='semibold'
                            color='#D9D9D9'
                            ml='10px'
                        >
                            Linkedin
                        </Text>
                    </Flex>
                    <Flex
                        alignItems='baseline'
                        mr={{ base: '0', xl: '43px' }}
                        mb={{ base: '1rem', xl: '-4px' }}
                        onClick={() => window.location.href = 'https://www.medium.com/@ruddabeltrao'}
                    >
                        <Image w='41px' h='22.72px' src='/img/medium.svg' alt="" />
                        <Text
                            fontSize='20px'
                            fontWeight='semibold'
                            color='#D9D9D9'
                            ml='10px'
                        >
                            Medium
                        </Text>
                    </Flex>
                    <Flex
                        alignItems='baseline'
                        mr={{ base: '0', xl: '43px' }}
                        mb={{ base: '1rem', xl: '-4px' }}
                        onClick={() => window.location.href = 'https://www.youtube.com/@ruddabeltrao'}
                    >
                        <Image w='35.08px' h='24px' src='/img/youtube.svg' alt="" />
                        <Text
                            fontSize='20px'
                            fontWeight='semibold'
                            color='#D9D9D9'
                            ml='10px'
                        >
                            YouTube
                        </Text>
                    </Flex>
                </Flex>
            </Flex>

        </Box>
    )
}