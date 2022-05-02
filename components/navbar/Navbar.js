import { Box, HStack, Image, Text } from "@chakra-ui/react";
import Logo from "./Logo";
import NavItem from "./NavItem";

const Navbar = ({ name, date, code }) => {
	return (
		<HStack
			justifyContent="space-between"
			w="85vw"
			alignSelf="center"
			pt="3rem"
		>
			<Logo />
			<HStack spacing="5rem" className="container">
				<NavItem content="About" link="#" />
				<NavItem content="Projects" link="#" />
				<NavItem content="Contact" link="#" />
			</HStack>
		</HStack>
	);
};
export default Navbar;
