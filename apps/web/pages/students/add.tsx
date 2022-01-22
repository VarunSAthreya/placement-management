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
    Select,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Loader } from '../../components/Loader';
import { Separator } from '../../components/Separator';
import { SideBar } from '../../components/Sidebar';
import {
    Branch,
    Roles,
    Section,
    useCreateUserMutation,
} from '../../generated/graphql';

type FormData = {
    name: string;
    email: string;
    USN: string;
    branch: string;
    section: string;
    tenth: number;
    twelth: number;
    CGPA: number;
    backlogs: number;
    password: string;
    year: number;
    eligible: boolean;
};

const StudentForm: NextPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const branches = ['CSE', 'ECE', 'ISE', 'ME', 'CV', 'EIE', 'IEM'];
    const sections = ['A', 'B', 'C'];

    const [create, { loading }] = useCreateUserMutation();

    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');
    const router = useRouter();

    const onSubmit = (data: FormData) => {
        const variables = {
            input: {
                USN: data.USN.toUpperCase(),
                role: 'STUDENT' as Roles,
                password: data.password,
                details: {
                    name: data.name,
                    email: data.email,
                    branch: data.branch as Branch,
                    section: data.section as Section,
                    backlogs: Number(data.backlogs),
                    tenth: Number(data.tenth),
                    twelth: Number(data.twelth),
                    CGPA: Number(data.CGPA),
                    year: Number(data.year),
                    eligible: Boolean(data.eligible),
                    placed: false,
                },
            },
        };

        console.log({ variables });

        create({
            variables,
        })
            .then(() => {
                router.push('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (loading) return <Loader />;

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
                                        <Input
                                            type="text"
                                            placeholder="Student Name"
                                            {...register('name', {
                                                required:
                                                    'Please enter The Student Name',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors.name && errors.name.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl
                                        isInvalid={errors.USN !== undefined}
                                    >
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
                                    <FormControl
                                        isInvalid={errors.email !== undefined}
                                    >
                                        <Input
                                            type="email"
                                            placeholder="Email ID"
                                            {...register('email', {
                                                required:
                                                    'Please Enter The Email Id of the Student',
                                            })}
                                        />
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
                                        <Select
                                            placeholder="Select Branch"
                                            {...register('branch', {
                                                required:
                                                    'Please Enter The Branch',
                                            })}
                                        >
                                            {branches.map((branch) => (
                                                <option
                                                    value={branch}
                                                    key={branch}
                                                >
                                                    {branch}
                                                </option>
                                            ))}
                                        </Select>
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
                                        <Select
                                            placeholder="Select Section"
                                            {...register('section', {
                                                required:
                                                    'Please Enter The Section',
                                            })}
                                        >
                                            {sections.map((section) => (
                                                <option
                                                    value={section}
                                                    key={section}
                                                >
                                                    {section}
                                                </option>
                                            ))}
                                        </Select>
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
                                        <FormErrorMessage>
                                            {errors.CGPA && errors.CGPA.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl
                                        isInvalid={errors.year !== undefined}
                                    >
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
                                        <Select
                                            placeholder="Is Eligible"
                                            {...register('eligible', {
                                                required:
                                                    'Please Select if Eligible or Not',
                                            })}
                                        >
                                            <option value={'true'}>True</option>
                                            <option value={'false'}>
                                                False
                                            </option>
                                        </Select>
                                        <FormErrorMessage>
                                            {errors.eligible &&
                                                errors.eligible.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                            </Grid>
                            <Grid templateColumns="repeat(2, 1fr)">
                                <GridItem p={4} colSpan={2}>
                                    <Text
                                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                                        bgClip="text"
                                        fontSize="3xl"
                                        fontWeight="extrabold"
                                        textTransform={'uppercase'}
                                    >
                                        Password
                                    </Text>
                                    <Separator />
                                </GridItem>
                                <GridItem p={4} colSpan={2}>
                                    <FormControl
                                        isInvalid={
                                            errors.password !== undefined
                                        }
                                    >
                                        <Input
                                            type="password"
                                            placeholder="Enter Default Password"
                                            {...register('password', {
                                                required:
                                                    'Please Enter A Default Password',
                                            })}
                                        />
                                        <FormErrorMessage>
                                            {errors.password &&
                                                errors.password.message}
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
