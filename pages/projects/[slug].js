import {
	Box,
	Flex,
	Heading,
	HStack,
	Image,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { projects } from "../../components/Slider/utils/projects";

const ProjectBySlug = () => {
	const { query } = useRouter();

	function isCurrent(img) {
		return img.slug === query.slug;
	}

	const currentProject = projects.find(isCurrent);
	console.log(currentProject);

	return (
		<div>
			<Flex>
				<Image src={currentProject?.image} width="65vw" />
				<Stack pl="3rem" pt="3rem">
					<Heading as="h1" fontSize={"5rem"} mb="3rem">
						{currentProject?.title}
					</Heading>
					<Box
						dangerouslySetInnerHTML={{ __html: currentProject?.description }}
					></Box>
				</Stack>
			</Flex>
		</div>
	);
};

export default ProjectBySlug;
