import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Image,
	Link,
	Text,
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
				<Box pl="3rem" pt="3rem">
					<Heading as="h1" fontSize={"5rem"} mb="3rem">
						{currentProject?.title}
					</Heading>
					<Box
						sx={{
							"p:not(:last-child)": {
								marginBottom: "3rem",
							},
						}}
						dangerouslySetInnerHTML={{ __html: currentProject?.description }}
					></Box>
					<HStack mt={"3rem"}>
						<Link
							href={currentProject?.website}
							isExternal
							className="btn__visit"
						>
							<Button
								color="gray.500"
								colorScheme="yellow"
								fontWeight={"normal"}
								fontSize="15px"
								p="2rem 3rem"
							>
								Visit Website
							</Button>
						</Link>
						<Link
							href={currentProject?.github}
							isExternal
							ml="2rem"
							className="btn__git"
						>
							<HStack p="8.8px 3rem">
								<Text fontSize="15px" className="btn__git__text">
									View on
								</Text>
								<Image src="/github.png" width="2.5rem" pl="5px" />
							</HStack>
						</Link>
					</HStack>
				</Box>
			</Flex>
		</div>
	);
};

export default ProjectBySlug;
