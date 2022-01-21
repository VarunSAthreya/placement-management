import {
    Button,
    FormControl,
    FormErrorMessage,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useColorModeValue,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useChangePasswordMutation } from '../../generated/graphql';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    usn: string;
};

type FormData = {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
};
const defaultValues: FormData = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
};

const ChangePassword: FC<Props> = ({ isOpen, onClose, usn }) => {
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
    } = useForm<FormData>({ defaultValues });

    const secondaryBG = useColorModeValue('white', '#242526');

    const [title, setTitle] = useState('Change Password');

    const [changePassword, { loading }] = useChangePasswordMutation();

    const onSubmit = async (data: FormData) => {
        console.log(data);
        const { oldPassword, newPassword, confirmPassword } = data;
        if (newPassword !== confirmPassword) {
            setError('confirmPassword', {
                type: 'manual',
                message: 'Passwords do not match',
            });
        }

        try {
            const res = await changePassword({
                variables: {
                    usn,
                    oldPassword,
                    newPassword,
                },
            });

            if (res.data.changePassword.USN === usn) {
                setTitle('Password Changed');
                reset();
                setTimeout(() => {
                    onClose();
                }, 1000);
            }
        } catch (error) {
            setError('oldPassword', {
                type: 'manual',
                message: error.message,
            });
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            motionPreset="slideInBottom"
            size="xl"
        >
            <ModalOverlay />
            <ModalContent bg={secondaryBG}>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl
                            isInvalid={errors.oldPassword !== undefined}
                            p={2}
                        >
                            <Input
                                type="password"
                                placeholder="Current Password"
                                {...register('oldPassword', {
                                    required:
                                        'Please Enter The Current Password',
                                })}
                            />
                            <FormErrorMessage>
                                {errors.newPassword &&
                                    errors.newPassword.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl
                            isInvalid={errors.newPassword !== undefined}
                            p={2}
                        >
                            <Input
                                type="password"
                                placeholder="New Password"
                                {...register('newPassword', {
                                    required: 'Please Enter The New Password',
                                    minLength: {
                                        value: 8,
                                        message:
                                            'Password must be atleast 8 characters long',
                                    },
                                    maxLength: {
                                        value: 20,
                                        message:
                                            'Password must be atmost 20 characters long',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.newPassword &&
                                    errors.newPassword.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl
                            isInvalid={errors.confirmPassword !== undefined}
                            p={2}
                        >
                            <Input
                                type="password"
                                placeholder="Confirm Password"
                                {...register('confirmPassword', {
                                    required:
                                        'Please Enter The Confirm Password',
                                    minLength: {
                                        value: 8,
                                        message:
                                            'Password must be atleast 8 characters long',
                                    },
                                    maxLength: {
                                        value: 20,
                                        message:
                                            'Password must be atmost 20 characters long',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.confirmPassword &&
                                    errors.confirmPassword.message}
                            </FormErrorMessage>
                        </FormControl>
                        <ModalFooter>
                            <Button variant="ghost" mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button
                                size={'md'}
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
                                disabled={loading}
                            >
                                Change Password
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ChangePassword;
