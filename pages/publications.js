import SEO from "../components/SEO";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { getGlobalData } from "../utils/global-data";

export default function Publications() {
    const globalData = getGlobalData();
    return (
        <Layout>
            <SEO title={globalData.siteName} description={globalData.description}></SEO>
            <Header></Header>
        </Layout>
    );
}
