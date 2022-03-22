import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { getGlobalData } from "../utils/global-data";
import { events } from "../data/events";

function eventsMapping() {
    return events.map((event, index) => (
        <div key={index}>
            <h2 className="text-2xl">{event.title}</h2>
        </div>
    ));
}

export default function Events() {
    const globalData = getGlobalData();
    return (
        <Layout>
            <SEO title="SAC | Events" description={globalData.description}></SEO>
            {eventsMapping()}
        </Layout>
    );
}
