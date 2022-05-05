import { Box, Text, Stack, Image } from "@chakra-ui/react";

const Card = () => {
	return (
		<Stack maxW={"50rem"}>
			<Box width={"50rem"} position="relative">
				<Image src="CherryTravels.png" />
				<Box
					background="pink"
					position="absolute"
					bottom="2rem"
					right="-2rem"
					p="1rem 3rem"
					color="gray.500"
				>
					Design & Dev
				</Box>
			</Box>
			<Text
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
			</Text>
		</Stack>
	);
};
export default Card;
