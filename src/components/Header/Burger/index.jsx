import { useState } from 'react';
import { Link, Text, Flex, Image } from "@chakra-ui/react";

import { RightNav } from '../RightNav';
import { StyledBurger } from './styles';

export function Burger() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open} setOpen={setOpen} />
        </>
    );
}