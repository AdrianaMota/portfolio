import { Box, HStack, Image, Text } from "@chakra-ui/react";

const NavItem = ({ content, link }) => {
	return (
		<Box as="a" href={link} fontSize="1.5rem" className="box" p="1rem">
			<Text className="link">{content}</Text>
		</Box>
	);
};
export default NavItem;
