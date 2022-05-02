import { ChakraProvider } from "@chakra-ui/react";
import defaultTheme from "../utils/theme";
import "../utils/link.scss";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={defaultTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
