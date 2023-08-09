import { useEffect } from 'react';
import { Link, Text, Flex, Image } from "@chakra-ui/react";

import { Ul } from './styles';
import { links } from '../../../utils/links';
import { headerColors } from '../../../utils/headerColors';

export function RightNav({ open, setOpen }) {

    return (
        <Ul open={open}>
            <Image w='117px' h='40px' src={"/img/logo.svg"} display={{ sm: 'none', md: 'inline' }} />
            <Flex flexDir={{ base: 'column', md: 'column', xl: 'row' }} align={'center'}>
                <Text
                    fontSize={"1rem"}
                    color="white"
                    p="0.5rem 1rem"
                    mr={open ? "0" : "0"}
                    _hover={{
                        textDecoration: "none",
                        color: headerColors.hoverColor,
                        cursor: "pointer",
                    }}
                    onClick={() => setOpen(false)}
                >
                    <Link href='#heading'>Home</Link>
                </Text>
                <Text
                    fontSize={"1rem"}
                    color="white"
                    p="0.5rem 1rem"
                    mr={open ? "0" : "0"}
                    _hover={{
                        textDecoration: "none",
                        color: headerColors.hoverColor,
                        cursor: "pointer",
                    }}
                    onClick={() => setOpen(false)}
                >
                    <Link href='#about'>Sobre</Link>
                </Text>
                <Text
                    fontSize={"1rem"}
                    color="white"
                    p="0.5rem 1rem"
                    mr={open ? "0" : "0"}
                    _hover={{
                        textDecoration: "none",
                        color: headerColors.hoverColor,
                        cursor: "pointer",
                    }}
                    onClick={() => setOpen(false)}
                >
                    <Link href='#appspublished'>Apps</Link>
                </Text>
                <Text
                    fontSize={"1rem"}
                    color="white"
                    p="0.5rem 1rem"
                    mr={open ? "0" : "0"}
                    _hover={{
                        textDecoration: "none",
                        color: headerColors.hoverColor,
                        cursor: "pointer",
                    }}
                    onClick={() => setOpen(false)}
                >
                    <Link href='#course'>Curso</Link>
                </Text>
                <Text
                    fontSize={"1rem"}
                    color="white"
                    p="0.5rem 1rem"
                    mr={open ? "0" : "0"}
                    _hover={{
                        textDecoration: "none",
                        color: headerColors.hoverColor,
                        cursor: "pointer",
                    }}
                    onClick={() => setOpen(false)}
                >
                    <Link href='#articles'>Artigos</Link>
                </Text>
                <Text
                    fontSize={"1rem"}
                    color="white"
                    p="0.5rem 1rem"
                    mr={open ? "0" : "0"}
                    _hover={{
                        textDecoration: "none",
                        color: headerColors.hoverColor,
                        cursor: "pointer",
                    }}
                    onClick={() => setOpen(false)}
                >
                    <Link href='#experience'>Experiência</Link>
                </Text>
                <Text
                    fontSize={"1rem"}
                    color="white"
                    p="0.5rem 0 0.5rem 0"
                    mr={open ? "0" : "0"}
                    _hover={{
                        textDecoration: "none",
                        color: headerColors.hoverColor,
                        cursor: "pointer",
                    }}
                    onClick={() => setOpen(false)}
                >
                    <Link href='#contact'>Contato</Link>
                </Text>
            </Flex>
        </Ul>
    );
}