import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Zoom from 'react-reveal/Zoom';

export function AppsPublished() {
    return (
        <Zoom>
            <Flex
                id="appspublished"
                flexDir='column'
                alignItems='center'
                mt={{ base: '64px', xl: '130px' }}
            >
                <Heading
                    bgGradient='linear(to-l, #585DE2, #6FFF75)'
                    bgClip='text'
                    fontSize={{ base: '2rem', xl: '4rem' }}
                    mb={{ base: '1rem', xl: '4rem' }}
                >Apps Publicados</Heading>

                <Flex
                    w={{ base: '95%', xl: '1120px' }}
                    direction={{ base: 'column', xl: 'row' }}
                    alignItems={{ base: 'center' }}
                >
                    {/* PLAY STORE */}
                    <Flex
                        w={{ base: '100%', xl: '332px' }}
                        flexDir='column'
                        mr={{ base: '0', xl: '53px' }}
                    >
                        <Text
                            fontSize={{ base: '1.5rem', xl: '3rem' }}
                            fontWeight='bold'
                            color='white'
                            textAlign={{ base: 'center', xl: 'initial' }}
                            mb={{ base: '1rem', xl: '2rem' }}
                        >
                            Play Store
                        </Text>
                        <Text
                            fontSize={{ base: '1rem', xl: '1.5rem' }}
                            textAlign={{ base: 'center', xl: 'initial' }}
                            mb={{ base: '1rem', xl: '0' }}
                            color='#8A8A8E'
                        >
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Facilisi laoreet quam habitant
                            in id. Nunc morbi
                            ullamcorper pellentesque
                            ipsum vitae.
                        </Text>
                    </Flex>

                    {/* MEU MERCADO */}
                    <Flex
                        w='352px'
                        h='446px'
                        flexDir='column'
                        align='center'
                        bg='#101011'
                        borderRadius='8px'
                        mr={{ base: '0', xl: '32px' }}
                        mb={{ base: '1rem', xl: '0' }}
                    >
                        <Image w='100%' h='188px' borderRadius={'8px 8px 0 0'} src='/img/app_meu_mercado.webp' alt="" />
                        <Flex
                            flexDir='column'
                            w='280px'
                        >
                            <Text
                                fontSize='1.5rem'
                                fontWeight='bold'
                                color='white'
                                mt='30px'
                                mb='22px'
                            >
                                Meu Mercado
                            </Text>
                            <Text
                                fontSize='1rem'
                                color='#8A8A8E'
                            >
                                Meu Mercado é um aplicativo que
                                facilita o controle de compras via
                                leitura de QR Code de Notas Fiscais
                                eletrônicas.
                            </Text>
                        </Flex>
                    </Flex>

                    {/* GWEI TRACKER */}
                    <Flex
                        w='352px'
                        h='446px'
                        flexDir='column'
                        align='center'
                        bg='#101011'
                        borderRadius='8px'
                    >
                        <Image w='100%' h='188px' borderRadius={'8px 8px 0 0'} src='/img/app_gwei_tracker.webp' alt="" />
                        <Flex
                            flexDir='column'
                            w='280px'
                        >
                            <Text
                                fontSize='1.5rem'
                                fontWeight='bold'
                                color='white'
                                mt='30px'
                                mb='22px'
                            >
                                Gwei Tracker
                            </Text>
                            <Text
                                fontSize='1rem'
                                color='#8A8A8E'
                            >
                                The app allow you to set a value for
                                low gwei, avg gwei and high gwei
                                and then receive notifications when
                                the value is equals or above than
                                your preferences.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Zoom>
    )
}