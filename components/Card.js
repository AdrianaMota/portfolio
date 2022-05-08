import { Box, Text, Stack, Image } from "@chakra-ui/react";

const Card = ({ isActive }) => {
	return (
		<Stack maxW={"40rem"}>
			<Box width={"40rem"} position="relative">
				<Image src="CherryTravels.png" />
				<Box
					display={isActive ? "block" : "none"}
					position="absolute"
					background="pink"
					bottom="2rem"
					right="-2rem"
					p="1rem 3rem"
					color="gray.500"
					transition
				>
					Design & Dev
				</Box>
			</Box>
			{/* <Text
				fontFamily={"heading"}
				fontSize="l"
				fontWeight={"bold"}
				pt="3rem"
				color="gray.500"
			>
				Mobile Project
			</Text>
			<Text fontSize={"1.5rem"}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
				nunc vulputate, vehicula mauris ac, efficitur purus. Nam et porta
				turpis. Nam sit amet commodo metus.
			</Text> */}
		</Stack>
	);
};
export default Card;
