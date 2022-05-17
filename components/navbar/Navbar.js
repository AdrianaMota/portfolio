import { HStack, Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import NavItem from "./NavItem";

const Navbar = () => {
	return (
		<Flex
			bg="rgba(255,255,255,0.5)"
			backdropFilter={"blur(50px)"}
			position={"fixed"}
			w="100%"
			justifyContent={"center"}
		>
			<HStack
				justifyContent="space-between"
				w="85vw"
				alignSelf="center"
				py="2rem"
			>
				<Logo />
				<HStack spacing="5rem" className="container">
					<NavItem content="About" link="#" />
					<NavItem content="Projects" link="#" />
					<NavItem content="Contact" link="#" />
				</HStack>
			</HStack>
		</Flex>
	);
};
export default Navbar;
