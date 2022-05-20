import { HStack, Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import NavItem from "./NavItem";

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);
	const changeBackground = () => {
		if (window.scrollY >= 100) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	useEffect(() => {
		changeBackground();
		window.addEventListener("scroll", changeBackground);
	});
	return (
		<Flex
			zIndex={100000}
			bg={navbar ? "rgba(255,255,255,0.7)" : "transparent"}
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
