import Head from "next/head";
import { getGlobalData } from "../utils/global-data.js";

export default function SEO({ title, description }) {
	const globalData = getGlobalData();
	return (
		<Head>
			<title>{title}</title>
			<link rel="icon" href={globalData.favicon} type="image/x-icon"></link>
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:image" content={globalData.favicon} />
		</Head>
	);
}
