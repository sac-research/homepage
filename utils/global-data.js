export const getGlobalData = () => {
	const siteName = process.env.SITE_NAME
		? decodeURI(process.env.SITE_NAME)
		: "SAC Research Group";
	const description = process.env.SITE_DESCRIPTION
		? decodeURI(process.env.SITE_DESCRIPTION)
		: "Software System Architecture in Cloud Computing";
	const favicon = "/logo_fav.ico";
	return {
		siteName,
		description,
		favicon,
	};
};
