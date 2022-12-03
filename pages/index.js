import { useRouter } from "next/router";
import Layout from "../components/Layouts/Layout";
import SEO from "../components/SEO";
import { getGlobalData } from "../utils/global-data.js";

export default function Home({ globalData }) {
    const router = useRouter();

    return (
        <Layout>
            <SEO title={globalData.siteName} description={globalData.description}></SEO>
            <div className="p-2 md:mt-4 flex h-64 justify-center items-center">
                <div>
                    <h1 className="text-5xl p-2 text-center bg-gradient-to-r text-transparent bg-clip-text from-green-400 via-cyan-300 to-violet-400 animate-text">
                        Software System Architecture in Cloud Computing
                    </h1>
                </div>
            </div>
            <div className="flex justify-center flex-wrap text-xl">
                <div className="card w-[28rem] bg-base-100 image-full shadow-xl m-2">
                    <figure>
                        <img
                            src="/assets/theme-1.jpg"
                            alt="applied machine learning for data intensive computing"
                        />
                    </figure>
                    <div className="card-body space-y-2">
                        <h2 className="card-title text-primary text-2xl inline-block text-center w-full bg-base-200 p-1 rounded-lg">
                            Research Theme 1
                        </h2>
                        <p>Applied Machine Learning for Data Intensive Computing</p>
                        <div className="card-actions justify-end">
                            <button
                                onClick={() => {
                                    router.push("/themes/applied-ml");
                                }}
                                className="btn btn-primary"
                            >
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-[28rem] bg-base-100 image-full shadow-xl m-2">
                    <figure>
                        <img src="/assets/theme-2.jpg" alt="Explainability for responsible A.I." />
                    </figure>
                    <div className="card-body space-y-2">
                        <h2 className="card-title text-primary text-2xl inline-block text-center w-full bg-base-200 p-1 rounded-lg">
                            Research Theme 2
                        </h2>
                        <p>Explainability for Responsible AI</p>
                        <div className="card-actions justify-end">
                            <button
                                onClick={() => {
                                    router.push("/themes/xai");
                                }}
                                className="btn btn-primary"
                            >
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export function getStaticProps() {
    const globalData = getGlobalData();
    return { props: { globalData } };
}
