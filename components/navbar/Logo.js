import { Box, HStack, Image, Link, LinkBox, Text } from "@chakra-ui/react";

const Logo = () => {
	return (
		<LinkBox>
			<Box href="#">
				<Image src="Logo.png" width="5rem" />
			</Box>
		</LinkBox>
	);
};
export default Logo;
