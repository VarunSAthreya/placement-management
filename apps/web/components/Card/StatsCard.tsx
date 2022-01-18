import {
    Box,
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import IconBox from '../Icons/IconBox';
import { WalletIcon } from '../Icons/Icons';

const StatsCard = ({ title, count }) => {
    return (
        <Box
            minH="83px"
            bg={useColorModeValue('white', '#242526')}
            p={4}
            borderRadius={8}
        >
            <Flex flexDirection="row" align="center" justify="space-evenly">
                <Stat me="auto">
                    <StatLabel
                        fontSize="lg"
                        color="gray.400"
                        fontWeight="bold"
                        pb=".1rem"
                    >
                        {title}
                    </StatLabel>
                    <StatNumber
                        fontSize="md"
                        color={useColorModeValue('black', 'white')}
                    >
                        {count}
                    </StatNumber>
                </Stat>
                <IconBox
                    as="box"
                    h={'45px'}
                    w={'45px'}
                    bg={'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'}
                >
                    <WalletIcon h={'24px'} w={'24px'} color="white" />
                </IconBox>
            </Flex>
        </Box>
    );
};

export default StatsCard;
