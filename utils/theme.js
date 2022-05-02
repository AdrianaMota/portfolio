import { extendTheme } from "@chakra-ui/react";

const defaultTheme = extendTheme({
	fontSizes: {
		xxxl: "16rem",
		xxl: "8rem",
		xl: "7.5rem",
		l: "5rem",
		m: "4rem",
		s: "2rem",
		xs: "1rem",
	},
	colors: {
		Pink: {
			50: "#FFFFFF",
			100: "#FFFFFF",
			200: "#FFFFFF",
			300: "#FFD7D7",
			400: "#FFAEAE",
			500: "#FF8585",
			600: "#FF4D4D",
			700: "#FF1515",
			800: "#DC0000",
			900: "#A40000",
		},
		lightPink: {
			50: "#FFFFFF",
			100: "#FFFFFF",
			200: "#FFFFFF",
			300: "#FFFFFF",
			400: "#FFF2F2",
			500: "#FFC9C9",
			600: "#FF9191",
			700: "#FF5959",
			800: "#FF2121",
			900: "#E80000",
		},
		yellow: {
			50: "#FFFFFF",
			100: "#FFFFFF",
			200: "#FFF4E2",
			300: "#FFE3BA",
			400: "#FFD391",
			500: "#FFC368",
			600: "#FFAD30",
			700: "#F79500",
			800: "#BF7300",
			900: "#875100",
		},
		blue: {
			50: "#FFFFFF",
			100: "#FFFFFF",
			200: "#FFFFFF",
			300: "#D7E2FF",
			400: "#AEC4FF",
			500: "#85A7FF",
			600: "#4D7FFF",
			700: "#1556FF",
			800: "#003DDC",
			900: "#002EA4",
		},
		gray: {
			50: "#AEAEAE",
			100: "#A4A4A4",
			200: "#8F8F8F",
			300: "#7B7B7B",
			400: "#666666",
			500: "#525252",
			600: "#363636",
			700: "#1A1A1A",
			800: "#000000",
			900: "#000000",
		},
	},
	fonts: {
		main: "'Poppins', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	},
	styles: {
		global: {
			html: {
				fontFamily: "main",
				fontSize: "10px",
			},
			body: {
				fontSize: "s",
				fontFamily: "main",
				fontWeight: "300",
			},
			"html, body": {
				fontFamily: "main",
				color: "gray.600",
			},
		},
	},
});

export default defaultTheme;
