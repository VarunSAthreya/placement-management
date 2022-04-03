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
    InputGroup,
    InputLeftAddon,
    Select,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Loader } from '../../../components/Loader';
import ErrorModal from '../../../components/Modal/Error';
import { Separator } from '../../../components/Separator';
import { SideBar } from '../../../components/Sidebar';
import {
    Branch,
    Section,
    useGetStudentDetailsQuery,
    useUpdateStudentMutation,
} from '../../../generated/graphql';

type FormValues = {
    name: string;
    email: string;
    USN: string;
    branch: string;
    section: string;
    tenth: number;
    twelth: number;
    CGPA: number;
    backlogs: number;
    year: number;
    eligible: boolean;
    placed: boolean;
    package: number;
};

const UpdateStudent = () => {
    const { asPath } = useRouter();
    const usn = asPath.split('/')[3];

    const { data, loading, error } = useGetStudentDetailsQuery({
        variables: { usn },
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: useMemo(() => {
            return data?.studentDetails;
        }, [data]),
    });

    useEffect(() => {
        reset(data?.studentDetails);
    }, [data, reset]);

    const branches = ['CSE', 'ECE', 'ISE', 'ME', 'CV', 'EIE', 'IEM'];
    const sections = ['A', 'B', 'C'];

    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');
    const router = useRouter();

    const [update, { loading: updLoading, error: updError }] =
        useUpdateStudentMutation();

    const onSubmit = (values: FormValues) => {
        const variables = {
            input: {
                USN: values.USN,
                name: values.name,
                email: values.email,
                branch: values.branch as Branch,
                section: values.section as Section,
                backlogs: Number(values.backlogs),
                tenth: Number(values.tenth),
                twelth: Number(values.twelth),
                CGPA: Number(values.CGPA),
                year: Number(values.year),
                eligible: Boolean(values.eligible),
                placed: Boolean(values.placed),
                package: Number(values.package),
            },
        };
        update({ variables })
            .then(() => {
                router.push('/students');
            })
            .catch((err) => {
                console.log({ err });
            });
    };

    if (updError) {
        console.log({ updError });
        return <ErrorModal message={updError.message} />;
    }
    if (error) {
        console.log({ error });
        return <ErrorModal message={error.message} />;
    }

    if (loading || !data || updLoading) return <Loader />;

    return (
        <Flex flexDirection={'row'} bg={primaryBG}>
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
                            bg={secondaryBG}
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
                                Update Student
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
                                    >
                                        Update Student
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Flex>
                    </Box>
                    <Box bg={secondaryBG} p={4} borderRadius={8}>
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
                                    <FormControl
                                        isInvalid={errors.name !== undefined}
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Name:
                                            </InputLeftAddon>
                                            <Input
                                                type="text"
                                                placeholder="Student Name"
                                                {...register('name', {
                                                    required:
                                                        'Please enter The Student Name',
                                                })}
                                            />
                                        </InputGroup>
                                        <FormErrorMessage>
                                            {errors.name && errors.name.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl
                                        isInvalid={errors.USN !== undefined}
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                USN:
                                            </InputLeftAddon>
                                            <Input
                                                type="text"
                                                disabled
                                                placeholder="USN"
                                                {...register('USN', {
                                                    required:
                                                        'Please Enter The USN of the Student',
                                                })}
                                            />
                                        </InputGroup>

                                        <FormErrorMessage>
                                            {errors.USN && errors.USN.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4} colSpan={2}>
                                    <FormControl
                                        isInvalid={errors.email !== undefined}
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Email:
                                            </InputLeftAddon>
                                            <Input
                                                type="email"
                                                placeholder="Email ID"
                                                {...register('email', {
                                                    required:
                                                        'Please Enter The Email Id of the Student',
                                                })}
                                            />
                                        </InputGroup>

                                        <FormErrorMessage>
                                            {errors.email &&
                                                errors.email.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>

                                <GridItem p={4}>
                                    <FormControl
                                        isInvalid={errors.branch !== undefined}
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Branch:
                                            </InputLeftAddon>
                                            <Select
                                                placeholder="Select Branch"
                                                {...register('branch', {
                                                    required:
                                                        'Please Enter The Branch',
                                                })}
                                            >
                                                {branches.map((br) => (
                                                    <option value={br} key={br}>
                                                        {br}
                                                    </option>
                                                ))}
                                            </Select>
                                        </InputGroup>
                                        <FormErrorMessage>
                                            {errors.branch &&
                                                errors.branch.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl
                                        isInvalid={errors.section !== undefined}
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Section:
                                            </InputLeftAddon>
                                            <Select
                                                placeholder="Select Section"
                                                {...register('section', {
                                                    required:
                                                        'Please Enter The Section',
                                                })}
                                            >
                                                {sections.map((sec) => (
                                                    <option
                                                        value={sec}
                                                        key={sec}
                                                    >
                                                        {sec}
                                                    </option>
                                                ))}
                                            </Select>
                                        </InputGroup>

                                        <FormErrorMessage>
                                            {errors.section &&
                                                errors.section.message}
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
                                    <FormControl
                                        isInvalid={errors.tenth !== undefined}
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                10 <sup>th</sup>:
                                            </InputLeftAddon>
                                            <Input
                                                type="number"
                                                step="0.01"
                                                placeholder="10th Marks Percentage"
                                                {...register('tenth', {
                                                    required:
                                                        'Please Enter Eligibile Criteria Based On 10Th Marks',
                                                    max: 100,
                                                    min: 0,
                                                })}
                                            />
                                        </InputGroup>

                                        <FormErrorMessage>
                                            {errors.tenth &&
                                                errors.tenth.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl
                                        isInvalid={errors.twelth !== undefined}
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                12 <sup>th</sup>:
                                            </InputLeftAddon>
                                            <Input
                                                type="number"
                                                step="0.01"
                                                placeholder="12Th Marks Percentage"
                                                {...register('twelth', {
                                                    required:
                                                        'Please Enter Eligibile Criteria Based On 12Th Marks',
                                                    max: 100,
                                                    min: 0,
                                                })}
                                            />
                                        </InputGroup>

                                        <FormErrorMessage>
                                            {errors.twelth &&
                                                errors.twelth.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl
                                        isInvalid={errors.CGPA !== undefined}
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                CGPA:
                                            </InputLeftAddon>
                                            <Input
                                                type="number"
                                                step="0.01"
                                                placeholder="CGPA Detail"
                                                {...register('CGPA', {
                                                    required:
                                                        'Please Enter Eligibile Criteria Based On CGPA',
                                                    max: 10,
                                                    min: 0,
                                                })}
                                            />
                                        </InputGroup>

                                        <FormErrorMessage>
                                            {errors.CGPA && errors.CGPA.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl
                                        isInvalid={errors.year !== undefined}
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Year:
                                            </InputLeftAddon>
                                            <Input
                                                type="number"
                                                placeholder="Passing Year"
                                                {...register('year', {
                                                    required:
                                                        'Please Enter Passing Year',
                                                    max: 2050,
                                                    min: 2015,
                                                })}
                                            />
                                        </InputGroup>

                                        <FormErrorMessage>
                                            {errors.year && errors.year.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl
                                        isInvalid={
                                            errors.backlogs !== undefined
                                        }
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Backlogs:
                                            </InputLeftAddon>
                                            <Input
                                                type="number"
                                                placeholder="No of backlogs"
                                                {...register('backlogs', {
                                                    required:
                                                        'Please Enter Eligibile Criteria Based On backlogs',
                                                    max: 10,
                                                    min: 0,
                                                })}
                                            />
                                        </InputGroup>

                                        <FormErrorMessage>
                                            {errors.backlogs &&
                                                errors.backlogs.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl
                                        isInvalid={
                                            errors.eligible !== undefined
                                        }
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Eligible:
                                            </InputLeftAddon>
                                            <Select
                                                placeholder="Is Eligible"
                                                {...register('eligible', {
                                                    required:
                                                        'Please Select if Eligible or Not',
                                                })}
                                            >
                                                <option value={'true'}>
                                                    True
                                                </option>
                                                <option value={'false'}>
                                                    False
                                                </option>
                                            </Select>
                                        </InputGroup>

                                        <FormErrorMessage>
                                            {errors.eligible &&
                                                errors.eligible.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl
                                        isInvalid={errors.placed !== undefined}
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Placed:
                                            </InputLeftAddon>
                                            <Select
                                                placeholder="Is Placed"
                                                {...register('placed', {
                                                    required:
                                                        'Please Select if Placed or Not',
                                                })}
                                            >
                                                <option value={'true'}>
                                                    True
                                                </option>
                                                <option value={'false'}>
                                                    False
                                                </option>
                                            </Select>
                                        </InputGroup>

                                        <FormErrorMessage>
                                            {errors.placed &&
                                                errors.placed.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl
                                        isInvalid={errors.package !== undefined}
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Package:
                                            </InputLeftAddon>
                                            <Input
                                                type="number"
                                                placeholder="Package"
                                                {...register('package', {
                                                    required:
                                                        'Please Enter Package',
                                                })}
                                            />
                                        </InputGroup>

                                        <FormErrorMessage>
                                            {errors.package &&
                                                errors.package.message}
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
                                            type="submit"
                                            textTransform={'uppercase'}
                                        >
                                            Update Student
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

export default UpdateStudent;
