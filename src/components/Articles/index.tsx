import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

export function Articles() {
    return (
        <Box
            id='articles'
            w={{ base: '95%', xl: '100%' }}
            h={{ base: '100%', xl: '608px' }}
            backgroundImage="url('/img/articles_bg.svg')"
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            backgroundPosition='center'
            alignItems='center'
            justifyContent='center'
        >
            <Flex
                w={{ base: '95%', xl: '1120px' }}
                flexDir='column'
                margin='42px auto'
                alignItems={{ base: 'center', xl: 'initial' }}
            >
                <Heading
                    color='white'
                    fontSize={{ base: '2rem', xl: '4rem' }}
                    textAlign={{ base: 'center', xl: 'initial' }}
                    mb={{ base: '1rem', xl: '2rem' }}
                    justifyContent={{ base: 'center' }}
                >
                    Artigos
                </Heading>
                <Text
                    color='#8A8A8E'
                    fontSize={{ base: '1rem', xl: '1.5rem' }}
                    mb='3rem'
                    textAlign={{ base: 'center', xl: 'initial' }}
                >

                </Text>
                <Flex
                    w={{ base: '95%', lg: '90%', xl: '1120px' }}
                    direction={{ base: 'column', xl: 'row' }}
                >
                    <Flex
                        w={{ base: '100%', xl: '529px' }}
                        h={{ base: '100%', xl: '160px' }}
                        padding='1rem'
                        borderRadius='8px'
                        flexDir='column'
                        border='solid 1px #696868'
                        className="glass"
                        mb={{ base: '1rem', xl: 0 }}
                    >
                        <Text
                            w={{ base: '100%', xl: '478px' }}
                            fontSize={{ base: '1rem', xl: '1.5rem' }}
                            fontWeight='semibold'
                            color='white'
                            mb='1.5rem'
                        >
                            Como desenvolver aplicativos Android | Not for Developers.</Text>
                        <Flex
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Text
                                fontSize='12px'
                                bg='#585DE2'
                                padding=' 4px 8px'
                                borderRadius='16px'
                                color='white'
                            >
                                Medium
                            </Text>
                            <Link color='#585DE2' href='https://ruddabeltrao.medium.com/como-desenvolver-aplicativos-android-not-for-developers-953e8b0305ea'>Ler artigo</Link>
                        </Flex>
                    </Flex>


                    <Flex
                        w={{ base: '100%', xl: '529px' }}
                        h={{ base: '100%', xl: '160px' }}
                        padding='1rem'
                        borderRadius='8px'
                        flexDir='column'
                        border='solid 1px #696868'
                        className="glass"
                        ml={{ base: 0, xl: '62px' }}
                    >
                        <Text
                            w={{ base: '100%', xl: '478px' }}
                            fontSize={{ base: '100%', xl: '1.5rem' }}
                            fontWeight='semibold'
                            color='white'
                            mb='1.5rem'
                        >
                            Autenticação oAuth2.0 Google Workspace| 4Beginners 👶| Parte I.</Text>
                        <Flex
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Text
                                fontSize='12px'
                                bg='#585DE2'
                                padding=' 4px 8px'
                                borderRadius='16px'
                                color='white'
                            >
                                Post
                            </Text>
                            <Link color='#585DE2' href='https://ruddabeltrao.medium.com/autentica%C3%A7%C3%A3o-oauth2-0-google-workspace-4beginners-parte-i-fa886a7e2b16'>Ler artigo</Link>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

        </Box>
    )
}