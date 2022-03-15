import SEO from "../components/SEO";
import Header from "../components/Header";
import { getGlobalData } from "../utils/global-data";

export default function Projects() {
    let globalData = getGlobalData();
    return (
        <div>
            <SEO
                title={globalData.siteName}
                description={globalData.description}
            ></SEO>
            <Header></Header>
        </div>
    );
}
