import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { getGlobalData } from "../utils/global-data";

export default function Home({ globalData }) {
    return (
        <Layout>
            <SEO
                title={globalData.siteName}
                description={globalData.description}
            ></SEO>
        </Layout>
    );
}

export function getStaticProps() {
    const globalData = getGlobalData();
    return { props: { globalData } };
}
