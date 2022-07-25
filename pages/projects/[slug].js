import { useEffect, useState } from "react";
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

	const [index, setIndex] = useState(0);

	const currentProject = projects.find(isCurrent);
	console.log(currentProject);

	const images = [currentProject?.wireframe, currentProject?.image];
	for (let i = 1; i < images.length; i++) {
		useEffect(() => {
			const timer = setTimeout(() => setIndex(i), i * 1000);
			return () => clearTimeout(timer);
		}, []);
	}

	return (
		<div>
			<Flex>
				<Image src={images[index]} width="65vw" />
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
					<Flex alignItems={"center"} mt={"3rem"} gap="7">
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
						<Box height={"3.5rem"} borderLeft="1px solid #525252"></Box>
						<Link href={currentProject?.github} isExternal>
							<Image src="/github.png" width="3.2rem" />
						</Link>
					</Flex>
				</Box>
			</Flex>
		</div>
	);
};

export default ProjectBySlug;
