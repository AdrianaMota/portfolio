import { Image, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Modal = ({ handleClose, text, image, visibility }) => {
	return (
		<Box className={visibility}>
			<Image className="modal-image" src={image} />
		</Box>
	);
};

export default Modal;
