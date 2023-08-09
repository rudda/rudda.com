import { Flex, Image, Text } from '@chakra-ui/react';

import { Burger } from './Burger';
import { Nav } from './styles';

export function Header() {
    return (
        <Flex w={{ base: '95%', xl: '100%' }} justifyContent={'center'} >
            <Flex
                w={{ base: '100%', xl: "1120px" }}
                // justifyContent={'space-between'}
                alignItems={'center'}
                padding="23px 0"
            >
                <Nav>
                    <Image w='117px' h='40px' display={{ md: 'none' }} src={"/img/logo.svg"} />
                    <Burger />
                </Nav>
            </Flex>
        </Flex>
    );
}