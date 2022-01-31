import {
    Box,
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    Icon,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { IconType } from 'react-icons';
import IconBox from '../Icons/IconBox';

type Props = {
    title: string;
    count: number;
    icon: IconType;
};

const StatsCard: FC<Props> = ({ title, count, icon }) => {
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
                    h={'45px'}
                    w={'45px'}
                    bg={'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'}
                >
                    <Icon h={'24px'} w={'24px'} color="white" as={icon} />
                </IconBox>
            </Flex>
        </Box>
    );
};

export default StatsCard;
