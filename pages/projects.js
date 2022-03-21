import SEO from "../components/SEO";
import { getGlobalData } from "../utils/global-data";

export default function Projects() {
    let globalData = getGlobalData();
    return (
        <div>
            <SEO title="SAC | Projects" description={globalData.description}></SEO>
        </div>
    );
}
