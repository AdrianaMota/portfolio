import {
	Box,
	Stack,
	Image,
	LinkBox,
	LinkOverlay,
	Text,
} from "@chakra-ui/react";

const Card = ({ isActive, workType, image, handleClick }) => {
	return (
		<Stack>
			<Box width={"auto"} position="relative">
				<Box className="card">
					<Text className="card__text">View More</Text>
					<LinkBox className={isActive ? "card__image" : ""}>
						<LinkOverlay onClick={handleClick}>
							<Image src={image} />
						</LinkOverlay>
					</LinkBox>
				</Box>
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
