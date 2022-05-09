import { Box, Text, Stack, Image } from "@chakra-ui/react";

const Card = ({ isActive, workType, image, title, description }) => {
	return (
		<Stack>
			<Box width={"auto"} position="relative">
				<Image src={image} />
				<Box
					position="absolute"
					bottom="2rem"
					right="-2rem"
					p="1rem 3rem"
					backgroundColor={"pink"}
					color="gray.500"
					className={isActive ? "card-overlay-active" : "card-overlay"}
				>
					{workType}
				</Box>
			</Box>
			{/* <Box
				className={
					isActive
						? "card-overlay-active text-block"
						: "card-overlay text-block"
				}
			>
				<Text
					fontFamily={"heading"}
					fontSize="l"
					fontWeight={"bold"}
					pt="3rem"
					color="gray.500"
				>
					{title}
				</Text>
				<Text fontSize={"1.5rem"}>{description}</Text>
			</Box> */}
		</Stack>
	);
};
export default Card;
