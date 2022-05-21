import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";

import Modal from "./Modal";
import Card from "./Card";

import { projects } from "./utils/projects";

const Carousel = () => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const [visibility, setVisibility] = useState("modal");

	const openModal = () => {
		setVisibility("modal--active");
		console.log("");
	};

	return (
		<Box>
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
						{({ isActive }) => (
							<Card
								handleClick={openModal()}
								isActive={isActive}
								{...projects[0]}
							/>
						)}
					</SwiperSlide>
					<SwiperSlide>
						{({ isActive }) => <Card isActive={isActive} {...projects[1]} />}
					</SwiperSlide>
					<SwiperSlide>
						{({ isActive }) => <Card isActive={isActive} {...projects[2]} />}
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
					<Text fontSize={"1.5rem"} className="text-description">
						{projects[currentSlideIndex].description}
					</Text>
				</Box>
			</Box>
			<Modal visibility={visibility} />
		</Box>
	);
};

export default Carousel;
