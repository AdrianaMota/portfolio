import { SvgBlob } from "react-svg-blob";
import { Stack, Box, Text, VStack, Image, HStack } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import Navbar from "../components/navbar/Navbar";

function generateShapeProps(growth, edges) {
	return {
		growth: growth,
		edges: edges,
	};
}

export default function Home() {
	return (
		<Stack spacing={0}>
			<Navbar />
			<Box position="absolute" w="600px" top="13rem" zIndex="-1">
				<SvgBlob
					variant="solid"
					color="#85A7FF"
					shapeProps={generateShapeProps(5, 8)}
				/>
			</Box>
			<Box position="absolute" w="600px" zIndex="-1">
				<SvgBlob
					variant="solid"
					color="#FFAEAE"
					shapeProps={generateShapeProps(7, 14)}
				/>
			</Box>
			<Box
				position="absolute"
				width="600px"
				zIndex="-1"
				top="15rem"
				left="20rem"
			>
				<SvgBlob
					variant="solid"
					color="#FFD391"
					shapeProps={generateShapeProps(4, 8)}
				/>
			</Box>
			<Box
				position="absolute"
				w="100vw"
				h="100vh"
				zIndex="-1"
				bg="rgba(255,255,255,0.7)"
				backdropFilter={"blur(50px)"}
			></Box>
			<VStack alignItems={"left"} p="10rem 0 0 10rem" w="75rem">
				<Text fontSize={"xxxl"} fontWeight="bold">
					Yay!!
				</Text>
				<Text color="gray.500">
					You are here! 🎉 <br />
					<br /> Welcome to my personal website, I’m a
					<strong> UI Engineer. </strong> Scroll down to check out my projects!
				</Text>
			</VStack>
		</Stack>
	);
}
