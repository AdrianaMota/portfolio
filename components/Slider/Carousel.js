import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { useState } from "react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";

import Card from "./Card";
import { projects } from "./utils/projects";

const Carousel = () => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	return (
		<Box>
			<Box width="75%" pt="10rem">
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
						{({ isActive }) => (
							<Card
								isActive={isActive}
								{...projects[0]}
								slug={projects[currentSlideIndex].slug}
							/>
						)}
					</SwiperSlide>
					<SwiperSlide>
						{({ isActive }) => (
							<Card
								isActive={isActive}
								{...projects[1]}
								slug={projects[currentSlideIndex].slug}
							/>
						)}
					</SwiperSlide>
					<SwiperSlide>
						{({ isActive }) => (
							<Card
								isActive={isActive}
								{...projects[2]}
								slug={projects[currentSlideIndex].slug}
							/>
						)}
					</SwiperSlide>
				</Swiper>
				<Box mx="auto" width={"54rem"}>
					<Text
						className="text-title"
						fontFamily={"heading"}
						fontSize="m"
						fontWeight={"bold"}
						color="gray.500"
					>
						{projects[currentSlideIndex].title}
					</Text>
					<Text fontSize={"1.5rem"} className="text-description" mb="2rem">
						{projects[currentSlideIndex].summary}
					</Text>
					<HStack>
						{projects[currentSlideIndex].tech.map((value) => (
							<Image src={value} width="2rem" />
						))}
					</HStack>
				</Box>
			</Box>
		</Box>
	);
};

export default Carousel;
