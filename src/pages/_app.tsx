import Navbar from "@/components/Navbar/Navbar";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
