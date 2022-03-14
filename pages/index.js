import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { getGlobalData } from "../utils/global-data";
import Header from "../components/Header";

export default function Home({ globalData }) {
    return (
        <Layout>
            <SEO
                title={globalData.siteName}
                description={globalData.description}
            ></SEO>
            <Header></Header>
        </Layout>
    );
}

export function getStaticProps() {
    const globalData = getGlobalData();
    return { props: { globalData } };
}
