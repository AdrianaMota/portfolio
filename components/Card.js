import { Box, Stack, Image } from "@chakra-ui/react";

const Card = ({ isActive, workType, image }) => {
	return (
		<Stack>
			<Box width={"auto"} position="relative">
				<Image src={image} />
				<Box
					position="absolute"
					bottom="2rem"
					right="-1rem"
					p="1rem 3rem"
					backgroundColor={"yellow.300"}
					color="gray.500"
					className={isActive ? "card-overlay-active" : "card-overlay"}
				>
					{workType}
				</Box>
			</Box>
		</Stack>
	);
};
export default Card;
