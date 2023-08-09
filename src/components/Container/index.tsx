import { Flex, FlexProps } from "@chakra-ui/react";

const Container = (props: FlexProps) => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            bg="#000"
            w="100%"
            {...props}
        />
    )
}

export default Container;