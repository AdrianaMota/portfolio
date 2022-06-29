import { Stack, Image } from "@chakra-ui/react";
import { Carousel } from "../components/Slider/Carousel";

export default function project() {
	const bears = useStore((state) => state.bears);

	return (
		<Stack spacing={0} pb="4">
			<Image src={bears} width={"60rem"} />
		</Stack>
	);
}
