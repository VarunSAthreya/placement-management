import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    Grid,
    GridItem,
    Input,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Separator } from '../components/Separator';
import { SideBar } from '../components/Sidebar';

const PlacedForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Flex
            flexDirection={'row'}
            bg={useColorModeValue('#f8f9fa', '#18191A')}
        >
            <SideBar />
            <Flex
                flexDirection="column"
                pt={{ base: '120px', md: '25px' }}
                marginLeft={'290px'}
                width={'100%'}
                p={4}
            >
                <Box mb="22px" overflowX={{ sm: 'scroll', xl: 'hidden' }}>
                    <Box pb={'25px'}>
                        <Flex
                            direction="column"
                            bg={useColorModeValue('white', '#242526')}
                            p={4}
                            borderRadius={8}
                            pb="1.5rem"
                        >
                            <Text
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                fontSize="4xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                Placed Student&apos;s List
                            </Text>
                            <Breadcrumb
                                separator={
                                    <ChevronRightIcon color="gray.500" />
                                }
                            >
                                <BreadcrumbItem>
                                    <BreadcrumbLink
                                        href="/"
                                        color="gray.500"
                                        _hover={{
                                            textDecoration: 'none',
                                            color: '#FF0080',
                                        }}
                                        _focus={{ outline: 'none' }}
                                        variant="no-hover"
                                    >
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <BreadcrumbLink
                                        href="/placed"
                                        color="gray.500"
                                        _hover={{
                                            textDecoration: 'none',
                                            color: '#FF0080',
                                        }}
                                        _focus={{ outline: 'none' }}
                                        variant="no-hover"
                                    >
                                        Placed Students
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink
                                        href="/placed"
                                        color="gray.500"
                                        _hover={{
                                            textDecoration: 'none',
                                            color: '#FF0080',
                                        }}
                                        _focus={{ outline: 'none' }}
                                        variant="no-hover"
                                    >
                                        Add Placed Students
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Flex>
                    </Box>
                    <Box
                        bg={useColorModeValue('white', '#242526')}
                        p={4}
                        borderRadius={8}
                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/*General Detail Fields*/}
                            <Grid templateColumns="repeat(2, 1fr)">
                                <GridItem p={4} colSpan={2}>
                                    <Text
                                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                                        bgClip="text"
                                        fontSize="3xl"
                                        fontWeight="extrabold"
                                        textTransform={'uppercase'}
                                    >
                                        Student Details
                                    </Text>
                                    <Separator />
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl isInvalid={errors.Name}>
                                        <Input
                                            type="text"
                                            placeholder="Student Name"
                                            {...register('Name', {
                                                required:
                                                    'Please enter The Student Name',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors.Name && errors.Name.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl isInvalid={errors.USN}>
                                        <Input
                                            type="text"
                                            placeholder="USN"
                                            {...register('USN', {
                                                required:
                                                    'Please Enter The USN of the Student',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors.USN && errors.USN.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                            </Grid>
                            {/*Eligibilty Fields*/}
                            <Grid templateColumns="repeat(2, 1fr)">
                                <GridItem p={4} colSpan={2}>
                                    <Text
                                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                                        bgClip="text"
                                        fontSize="3xl"
                                        fontWeight="extrabold"
                                        textTransform={'uppercase'}
                                    >
                                        Company Details
                                    </Text>
                                    <Separator />
                                </GridItem>
                                <GridItem p={4} colSpan={2}>
                                    <FormControl isInvalid={errors.Company}>
                                        <Input
                                            type="text"
                                            placeholder="Company Name"
                                            {...register('Company', {
                                                required:
                                                    'Please enter The Company Name',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors.Company &&
                                                errors.Company.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4} colSpan={2}>
                                    <FormControl isInvalid={errors.Package}>
                                        <Input
                                            type="text"
                                            placeholder="Enter Package Detail"
                                            {...register('Package', {
                                                required:
                                                    'Please Enter The Package Detail',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors.Package &&
                                                errors.Package.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4} colSpan={2} mt={4}>
                                    <Flex justify={'center'}>
                                        <Button
                                            fontSize={'1.3rem'}
                                            size={'lg'}
                                            color={'white'}
                                            bg={
                                                'linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)'
                                            }
                                            _hover={{
                                                bg: 'linear-gradient( 310deg,  #541d8b 0%, #d8016d 100%)',
                                            }}
                                            _focus={{ outline: 'none' }}
                                            variant="no-hover"
                                            type="submit"
                                            textTransform={'uppercase'}
                                        >
                                            Add Student
                                        </Button>
                                    </Flex>
                                </GridItem>
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
};

export default PlacedForm;
