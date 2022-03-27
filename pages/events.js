import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { getGlobalData } from "../utils/global-data";
import { events } from "../data/events";

function eventsMapping() {
    return events.map((event, index) => (
        <div className="max-w-6xl my-2" key={index}>
            <h2 className="text-2xl mb-2">
                {event.date}, {event.year} | {event.title}
            </h2>
            {event.description.map((d, index) => (
                <p className="text-black" key={index}>
                    {index == 1 ? <>&emsp; {d}</> : d}
                </p>
            ))}
        </div>
    ));
}

export default function Events() {
    const globalData = getGlobalData();
    return (
        <Layout>
            <SEO title="SAC | Events" description={globalData.description}></SEO>
            <div className="flex flex-col mt-8 mx-4 justify-center items-center">
                {eventsMapping()}
            </div>
        </Layout>
    );
}
