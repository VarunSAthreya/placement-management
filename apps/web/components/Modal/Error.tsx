import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';

const ErrorModal = ({ message }) => {
    const secondaryBG = useColorModeValue('white', '#242526');
    const { onClose } = useDisclosure();

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
            </ModalContent>
        </Modal>
    );
};

export default ErrorModal;
