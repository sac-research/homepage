import SEO from "../components/SEO";
import Header from "../components/Header";

export default function Projects() {
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
