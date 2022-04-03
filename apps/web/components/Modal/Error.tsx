import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

const ErrorModal = ({ message }) => {
    const secondaryBG = useColorModeValue('white', '#242526');
    const { onClose } = useDisclosure();
    const router = useRouter();

    return (
        <Modal
            isOpen={true}
            onClose={onClose}
            isCentered
            motionPreset="slideInBottom"
            size="xl"
        >
            <ModalOverlay />
            <ModalContent bg={secondaryBG}>
                <ModalHeader>
                    <Text
                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                        bgClip="text"
                        fontWeight="bold"
                        fontSize="2xl"
                        textTransform={'uppercase'}
                    >
                        Error Occurred
                    </Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={4}>{message}</ModalBody>
                <ModalFooter>
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
                        onClick={() => router.reload()}
                    >
                        Reload
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ErrorModal;
