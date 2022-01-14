import {
    Text,
    Box,
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Input,
    Grid,
    FormControl,
    GridItem,
    FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { ChevronRightIcon } from '@chakra-ui/icons';
import SideBar from '../components/Sidebar/Sidebar';
import React from 'react';
import Separator from '../components/Separator/Separator';

const StudentForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Flex flexDirection={'row'} bg={'#f8f9fa'}>
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
                            bg={'white'}
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
                                Student&apos;s List
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
                                        href="/students"
                                        color="gray.500"
                                        _hover={{
                                            textDecoration: 'none',
                                            color: '#FF0080',
                                        }}
                                        _focus={{ outline: 'none' }}
                                        variant="no-hover"
                                    >
                                        Students
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink
                                        href="#"
                                        color="gray.500"
                                        _hover={{
                                            textDecoration: 'none',
                                            color: '#FF0080',
                                        }}
                                        _focus={{ outline: 'none' }}
                                        variant="no-hover"
                                    >
                                        Add Student Details
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Flex>
                    </Box>
                    <Box bg={'white'} p={4} borderRadius={8}>
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
                                <GridItem p={4} colSpan={2}>
                                    <FormControl isInvalid={errors.USN}>
                                        <Input
                                            type="email"
                                            placeholder="Email ID"
                                            {...register('Email', {
                                                required:
                                                    'Please Enter The Email Id of the Student',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors.Email &&
                                                errors.Email.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl isInvalid={errors.Branch}>
                                        <Input
                                            type="text"
                                            placeholder="Branch"
                                            {...register('Branch', {
                                                required:
                                                    'Please Enter The Branch of the Student',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors.USN && errors.USN.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl isInvalid={errors.Section}>
                                        <Input
                                            type="text"
                                            placeholder="Section"
                                            {...register('Section', {
                                                required:
                                                    'Please Enter The Section of the Student',
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
                                        Academic Details
                                    </Text>
                                    <Separator />
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl isInvalid={errors.Tenth}>
                                        <Input
                                            type="text"
                                            placeholder="10th Marks Percentage"
                                            {...register('Tenth', {
                                                required:
                                                    'Please Enter Eligibile Criteria Based On 10Th Marks',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors.Tenth &&
                                                errors.Tenth.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl isInvalid={errors.Twelth}>
                                        <Input
                                            type="text"
                                            placeholder="12Th Marks Percentage"
                                            {...register('Twelth', {
                                                required:
                                                    'Please Enter Eligibile Criteria Based On 12Th Marks',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors.Twelth &&
                                                errors.Twelth.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl isInvalid={errors.Cgpa}>
                                        <Input
                                            type="number"
                                            placeholder="CGPA Detail"
                                            {...register('Cgpa', {
                                                required:
                                                    'Please Enter Eligibile Criteria Based On cgpa',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors.Cgpa && errors.Cgpa.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl isInvalid={errors.Backlogs}>
                                        <Input
                                            type="number"
                                            placeholder="No of Backlogs"
                                            {...register('Backlogs', {
                                                required:
                                                    'Please Enter Eligibile Criteria Based On backlogs',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors.Backlogs &&
                                                errors.Backlogs.message}
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
                                            Enroll Student
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

export default StudentForm;
