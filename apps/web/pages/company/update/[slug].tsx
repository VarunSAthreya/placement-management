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
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Loader } from '../../../components/Loader';
import ErrorModal from '../../../components/Modal/Error';
import { Separator } from '../../../components/Separator';
import { SideBar } from '../../../components/Sidebar';
import {
    CompanyType,
    useGetCompanyDetailsQuery,
    useUpdateCompanyMutation,
} from '../../../generated/graphql';

type FormValues = {
    CGPA: number;
    backlogs: number;
    date: string;
    name: string;
    package: number;
    tenth: number;
    twelth: number;
    type: string;
    year: number;
};

const CompanyForm: NextPage = () => {
    const { asPath } = useRouter();
    const company = asPath.split('/')[3];

    const { data, loading, error } = useGetCompanyDetailsQuery({
        variables: { name: company },
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: useMemo(() => {
            const details = {
                name: data?.company?.name,
                type: data?.company?.type,
                year: data?.company?.year,
                package: data?.company?.package,
                date: new Date(Number(data?.company?.arrival_date ?? 0))
                    .toISOString()
                    .substring(0, 10),
                backlogs: data?.company?.eligibility?.backlogs,
                CGPA: data?.company?.eligibility?.CGPA,
                tenth: data?.company?.eligibility?.tenth,
                twelth: data?.company?.eligibility?.twelth,
            };
            console.log({ details });

            return details;
        }, [data]),
    });

    useEffect(() => {
        const details = {
            name: data?.company?.name,
            type: data?.company?.type,
            year: data?.company?.year,
            package: data?.company?.package,
            date: new Date(Number(data?.company?.arrival_date ?? 0))
                .toISOString()
                .substring(0, 10),
            backlogs: data?.company?.eligibility?.backlogs,
            CGPA: data?.company?.eligibility?.CGPA,
            tenth: data?.company?.eligibility?.tenth,
            twelth: data?.company?.eligibility?.twelth,
        };
        reset(details);
    }, [data, reset]);

    const router = useRouter();

    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');

    const [update, { loading: updateLoading }] = useUpdateCompanyMutation();

    const onSubmit = (values: FormValues) => {
        const variables = {
            input: {
                name: values.name,
                type: values.type as CompanyType,
                package: Number(values.package),
                year: Number(values.year),
                arrival_date: new Date(values.date).toISOString(),
                eligibility: {
                    backlogs: Number(values.backlogs),
                    CGPA: Number(values.CGPA),
                    tenth: Number(values.tenth),
                    twelth: Number(values.twelth),
                },
            },
        };

        console.log({ variables });

        update({ variables })
            .then(() => router.push('/company'))
            .catch((err) => console.log(err));
    };

    if (error) {
        console.log({ error });
        return <ErrorModal message={error.message} />;
    }

    if (loading || updateLoading || !data) return <Loader />;

    return (
        <Flex flexDirection={{ base: 'column', lg: 'row' }} bg={primaryBG}>
            <SideBar />
            <Flex
                flexDirection="column"
                pt={{ base: '120px', md: '25px' }}
                marginLeft={{ base: 0, md: '295px' }}
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
                                Update Company
                            </Text>
                            <Breadcrumb
                                separator={
                                    <ChevronRightIcon color="gray.500" />
                                }
                            >
                                <BreadcrumbItem>
                                    <BreadcrumbLink
                                        href="/home"
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
                                        href="/company"
                                        color="gray.500"
                                        _hover={{
                                            textDecoration: 'none',
                                            color: '#FF0080',
                                        }}
                                        _focus={{ outline: 'none' }}
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
                                    >
                                        Update Company
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
                                        Company Details
                                    </Text>
                                    <Separator />
                                </GridItem>
                                <GridItem p={4} colSpan={{ base: 2, md: 1 }}>
                                    <FormControl
                                        isInvalid={errors.name !== undefined}
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Name:
                                            </InputLeftAddon>
                                            <Input
                                                type="text"
                                                placeholder="Company Name"
                                                disabled
                                                {...register('name', {
                                                    required:
                                                        'Please Enter The Company Name',
                                                })}
                                            />
                                        </InputGroup>

                                        <FormErrorMessage>
                                            {errors.name && errors.name.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4} colSpan={{ base: 2, md: 1 }}>
                                    <FormControl
                                        isInvalid={errors.type !== undefined}
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Type:
                                            </InputLeftAddon>
                                            <Select
                                                placeholder="Select Company Type"
                                                {...register('type', {
                                                    required:
                                                        'Please Enter The Company Type',
                                                })}
                                            >
                                                <option value="SERVICE">
                                                    Service
                                                </option>
                                                <option value="PRODUCT">
                                                    Product
                                                </option>
                                            </Select>
                                        </InputGroup>

                                        <FormErrorMessage>
                                            {errors.type && errors.type.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4} colSpan={2}>
                                    <FormControl
                                        isInvalid={errors.year !== undefined}
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Year:
                                            </InputLeftAddon>
                                            <Select
                                                placeholder="Select Year"
                                                {...register('year', {
                                                    required:
                                                        'Please Enter The Year',
                                                })}
                                            >
                                                <option value="2022">
                                                    2022
                                                </option>
                                                <option value="2023">
                                                    2023
                                                </option>
                                                <option value="2024">
                                                    2024
                                                </option>
                                            </Select>
                                        </InputGroup>

                                        <FormErrorMessage>
                                            {errors.year && errors.year.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4} colSpan={2}>
                                    <FormControl
                                        isInvalid={errors.package !== undefined}
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Package:
                                            </InputLeftAddon>
                                            <Input
                                                type="number"
                                                placeholder="Enter Package Detail"
                                                {...register('package', {
                                                    required:
                                                        'Please Enter The Package Detail',
                                                })}
                                            />
                                        </InputGroup>

                                        <FormErrorMessage>
                                            {errors.package &&
                                                errors.package.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4} colSpan={2}>
                                    <FormControl
                                        isInvalid={errors.date !== undefined}
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Arrival Date:
                                            </InputLeftAddon>
                                            <Input
                                                color="gray.500"
                                                type="date"
                                                {...register('date', {
                                                    required:
                                                        'Please Enter The Arrival Date of The Company',
                                                })}
                                            />
                                        </InputGroup>

                                        <FormErrorMessage>
                                            {errors.date && errors.date.message}
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
                                <GridItem p={4} colSpan={{ base: 2, md: 1 }}>
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
                                <GridItem p={4} colSpan={{ base: 2, md: 1 }}>
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
                                                placeholder="12th Marks Percentage"
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
                                <GridItem p={4} colSpan={{ base: 2, md: 1 }}>
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
                                <GridItem p={4} colSpan={{ base: 2, md: 1 }}>
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
                                                placeholder="No of Backlogs"
                                                {...register('backlogs', {
                                                    required:
                                                        'Please Enter Eligible Criteria Based On backlogs',
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
                                            _active={{
                                                bg: 'linear-gradient( 310deg,  #541d8b 0%, #d8016d 100%)',
                                            }}
                                            _focus={{
                                                bg: 'linear-gradient( 310deg,  #541d8b 0%, #d8016d 100%)',
                                            }}
                                            type="submit"
                                            textTransform={'uppercase'}
                                        >
                                            Update Company
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
