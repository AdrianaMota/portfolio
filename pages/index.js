import { useState } from "react";
import { SvgBlob } from "react-svg-blob";
import {
	Stack,
	Box,
	Text,
	VStack,
	Image,
	HStack,
	Flex,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import Navbar from "../components/navbar/Navbar";
import Card from "../components/Card";

import ClientOnly from "../components/ClientOnly";

function generateShapeProps(growth, edges) {
	return {
		growth: growth,
		edges: edges,
	};
}

const projects = [
	{
		image: "CherryTravels.png",
		workType: "Dev & Design",
		title: "Cherry Travels",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nunc vulputate, vehicula mauris ac, efficitur purus. Nam et porta turpis. Nam sit amet commodo metus.",
	},
	{
		image: "Meds4Vets.png",
		workType: "Dev & Design",
		title: "Meds4Vets",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nunc vulputate, vehicula mauris ac, efficitur purus. Nam et porta turpis. Nam sit amet commodo metus.",
	},
	{
		image: "Leo.png",
		workType: "Dev & Design",
		title: "Leo",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nunc vulputate, vehicula mauris ac, efficitur purus. Nam et porta turpis. Nam sit amet commodo metus.",
	},
];

export default function Home() {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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
					color="#FFAEAE"
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
					color="#FFD391"
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

			<Flex direction="column" pt="5rem" px="10rem">
				<Stack direction="row" justifyContent="space-between">
					<VStack alignItems={"left"} w="75rem">
						<Text fontSize={"xxxl"}>Yayy!</Text>
						<Text color="gray.500" lineHeight={1.8}>
							You're here 🎉 <br />
							I'm Adriana Mota a UI Developer
						</Text>
					</VStack>

					<Box pr="0">
						<Image src={`Bunny.gif?${Math.random()}`} width="15rem" />
					</Box>
				</Stack>
			</Flex>
			<Box width="75%" pt="20rem">
				<Swiper
					effect={"coverflow"}
					grabCursor
					centeredSlides
					slidesPerView={2}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					loop
					pagination={{
						clickable: true,
					}}
					speed={800}
					parallax
					modules={[EffectCoverflow, Pagination, Navigation]}
					navigation
					onSlideChange={(swiper) => setCurrentSlideIndex(swiper.realIndex)}
				>
					<SwiperSlide>
						{({ isActive }) => <Card isActive={isActive} {...projects[0]} />}
					</SwiperSlide>
					<SwiperSlide>
						{({ isActive }) => <Card isActive={isActive} {...projects[1]} />}
					</SwiperSlide>
					<SwiperSlide>
						{({ isActive }) => <Card isActive={isActive} {...projects[2]} />}
					</SwiperSlide>
				</Swiper>
				<Box margin="0 auto" width={"54rem"}>
					<Text
						className="text-title"
						fontFamily={"heading"}
						fontSize="l"
						fontWeight={"bold"}
						color="gray.500"
					>
						{projects[currentSlideIndex].title}
					</Text>
					<Text fontSize={"1.5rem"} className="text-description">
						{projects[currentSlideIndex].description}
					</Text>
				</Box>
			</Box>
		</Stack>
	);
}
