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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi laoreet quam habitant in id. Nunc
                    morbi ullamcorper pellentesque ipsum vitae.
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
                            Sobre ciclo de performace de apliocações Android.</Text>
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
                                Científico
                            </Text>
                            <Link color='#585DE2' href='#'>Ler artigo</Link>
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
                            Requisições HTTP com a Lib Network Connection.</Text>
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
                            <Link color='#585DE2' href='#'>Ler artigo</Link>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

        </Box>
    )
}