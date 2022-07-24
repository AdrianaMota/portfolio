import { useState } from "react";
import {
	Box,
	Stack,
	Image,
	LinkBox,
	LinkOverlay,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Card = ({ isActive, workType, image, wireframe, handleClick, slug }) => {
	const [currentSrc, setSrc] = useState(image);

	const handleHoverIn = () => {
		if (isActive) {
			setSrc(wireframe);
		}
	};
	const handleHoverOut = () => {
		if (isActive) {
			setSrc(image);
		}
	};

	return (
		<Link href={`/projects/${slug}`}>
			<Stack>
				<Box width={"auto"} position="relative">
					<Box backgroundColor={"black"}>
						<Box
							className={isActive ? "card" : ""}
							_hover={{
								_after: {
									content: "''",
								},
							}}
							position="relative"
						>
							<Text
								onClick={handleClick}
								className="card__text"
								zIndex={"1000"}
							>
								View More
							</Text>
							<LinkBox className={isActive ? "card__image" : ""}>
								<LinkOverlay
									onClick={handleClick}
									onMouseOver={handleHoverIn}
									onMouseOut={handleHoverOut}
								>
									<Image src={currentSrc} className="card__src" />
								</LinkOverlay>
							</LinkBox>
						</Box>
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
		</Link>
	);
};
export default Card;
