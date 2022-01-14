import { Box, Flex, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import IconBox from '../Icons/IconBox';
import { WalletIcon } from '../Icons/Icons';

const StatsCard = () => {
    return (
        <Box minH="83px" bg="white" p={4} borderRadius={8}>
            <Flex flexDirection="row" align="center" justify="space-evenly">
                <Stat me="auto">
                    <StatLabel
                        fontSize="lg"
                        color="gray.400"
                        fontWeight="bold"
                        pb=".1rem"
                    >
                        No of Students
                    </StatLabel>
                    <StatNumber fontSize="md" color="black">
                        53,000
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
