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
    FormLabel,
    FormControl,
    GridItem,
    FormErrorMessage,
    useColorModeValue,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { ChevronRightIcon } from '@chakra-ui/icons';
import SideBar from '../components/Sidebar/Sidebar';
import React from 'react';
import Separator from '../components/Separator/Separator';

const CompanyForm = () => {
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
                                Company&apos;s List
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
                                        href="/company"
                                        color="gray.500"
                                        _hover={{
                                            textDecoration: 'none',
                                            color: '#FF0080',
                                        }}
                                        _focus={{ outline: 'none' }}
                                        variant="no-hover"
                                    >
                                        Companies
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
                                        Add Company
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
                                        Company Details
                                    </Text>
                                    <Separator />
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl isInvalid={errors.Name}>
                                        <Input
                                            type="text"
                                            placeholder="Company Name"
                                            {...register('Name', {
                                                required:
                                                    'Please Enter The Company Name',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors.Name && errors.Name.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl isInvalid={errors.Type}>
                                        <Input
                                            type="text"
                                            placeholder="Company Type"
                                            {...register('Type', {
                                                required:
                                                    'Please Enter The Company Type',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors.Type && errors.Type.message}
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
                                <GridItem p={4} pt={0} colSpan={2}>
                                    <FormControl isInvalid={errors.Date}>
                                        <FormLabel m={0} color="gray.500" p={2}>
                                            Arrival Date
                                        </FormLabel>
                                        <Input
                                            color="gray.500"
                                            type="date"
                                            {...register('Date', {
                                                required:
                                                    'Please Enter The Arrival Date of The Company',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors.Date && errors.Date.message}
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
                                        Eligibility Criteria
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
                                            Enlist Company
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

export default CompanyForm;
