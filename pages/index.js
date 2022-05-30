import { SvgBlob } from "react-svg-blob";
import { Stack, Box, Text, VStack, Image, Flex } from "@chakra-ui/react";

import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/Slider/Carousel";
import ReactFullpage from "@fullpage/react-fullpage";

function generateShapeProps(growth, edges) {
	return {
		growth: growth,
		edges: edges,
	};
}

export default function Home() {
	return (
		<Stack spacing={0} pb="4">
			<Navbar />

			{/* Blob */}
			<Box position="absolute" w="600px" top="13rem" zIndex="-1">
				<SvgBlob
					variant="solid"
					color="#85A7FF"
					shapeProps={generateShapeProps(5, 8)}
				/>
			</Box>

			{/* Blob */}
			<Box position="absolute" w="600px" zIndex="-1">
				<SvgBlob
					variant="solid"
					color="#FFD391"
					shapeProps={generateShapeProps(7, 14)}
				/>
			</Box>

			{/* Blob */}
			<Box
				position="absolute"
				width="600px"
				zIndex="-1"
				top="15rem"
				left="20rem"
			>
				<SvgBlob
					variant="solid"
					color="#FFAEAE"
					shapeProps={generateShapeProps(4, 8)}
				/>
			</Box>

			{/* Background */}
			<Box
				position="absolute"
				w="100%"
				h="100%"
				zIndex="-1"
				bg="rgba(255,255,255,0.8)"
				backdropFilter={"blur(50px)"}
			></Box>

			<Flex direction="column" pt="13rem" px="10rem">
				<Stack direction="row" justifyContent="space-between">
					<VStack
						alignItems={"left"}
						w="75rem"
						justifyContent={"space-between"}
						h="80vh"
					>
						<Box>
							<Text fontSize={"xxxl"}>Yayy!</Text>
							<Text color="gray.500" lineHeight={1.8}>
								You're here 🎉 <br />
								I'm Adriana Mota a UI Developer
							</Text>
						</Box>
						<Image src="arrow.png" width={"2rem"} />
					</VStack>
					<Box pr="10rem">
						<Image
							position={"fixed"}
							src={`Bunny.gif?${Math.random()}`}
							width="15rem"
						/>
					</Box>
				</Stack>
			</Flex>
			<Carousel />
			<Box p="40rem"></Box>
		</Stack>
	);
}
