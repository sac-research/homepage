import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { getGlobalData } from "../utils/global-data";
import Homepage from "../components/Homepage";

export default function Home({ globalData }) {
    return (
        <Layout>
            <SEO title={globalData.siteName} description={globalData.description}></SEO>
            <div className="flex flex-col mt-8 mx-4 justify-center items-center">
                <div>
                    <h3 className="text-red-800 ">
                        SAC research group focuses on data intensive applications in various domains
                        running in and for the cloud
                    </h3>
                    <h4>
                        Our research endeavours on designing adaptive software components,
                        architecture framework and analysis method to scale data intensive
                        distributed systems, through modeling software architecture; quantifying the
                        system's characteristics using statistical models; predicting the system's
                        quality attributes and devising system platforms. Current projects
                        investigate mechanisms to improve the scalability and reliability of
                        MapReduce Framework and Stream Processing Middleware to process incremental
                        data analysis.
                    </h4>
                </div>
            </div>
        </Layout>
    );
}

export function getStaticProps() {
    const globalData = getGlobalData();
    return { props: { globalData } };
}
