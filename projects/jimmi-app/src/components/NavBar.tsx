import { HStack, Box, Flex, Link, useBreakpointValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
    const navigate = useNavigate();

    const handleNav = (path: string) => {
        navigate(path);
    };


    return (
        <Flex justifyContent="space-between" padding="10px" alignItems="center" height="70px">
            <Box></Box>
            <HStack spacing={8}>
                <Link onClick={() => handleNav('/project')} textDecoration="none">
                    Home
                </Link>
                <Link onClick={() => handleNav('/users')} textDecoration="none">
                    Articles
                </Link>
                <Link onClick={() => handleNav('/admin')} textDecoration="none">
                    Contact us
                </Link>
            </HStack>
            <Box>
                <ColorModeSwitch />
            </Box>
        </Flex>
    );
}

export default NavBar;
