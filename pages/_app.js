import Head from "next/head";
import "../styles/globals.css";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>statgraph</title>
				<meta property="og:site_name" content="statgraph" />
				<meta property="og:title" content="statgraph" />
				<meta property="og:description" content="does your stats homework" />
				<meta name="theme-color" content="#FF6262" />
			</Head>
			<AnimateSharedLayout>
				<Component {...pageProps} />
			</AnimateSharedLayout>
		</>
	);
}

export default MyApp;
