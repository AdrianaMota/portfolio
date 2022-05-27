import { Image, Box } from "@chakra-ui/react";

const Modal = ({ Image, visibility }) => {
	return (
		<Box className={visibility}>
			<Image className="modal-image" src={image} />
		</Box>
	);
};

export default Modal;
