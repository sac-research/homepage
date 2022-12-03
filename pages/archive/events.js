import SEO from "../../components/SEO";
import Layout from "../../components/Layouts/Layout";
import { getGlobalData } from "../../utils/global-data";
import { events } from "../../data/archive_events";

function eventsMapping() {
    return events.map((event, index) => (
        <div className="my-2" key={index}>
            <h2 className="text-2xl mb-2 font-bold text-emerald-500">
                {event.date}, {event.year} | {event.title}
            </h2>
            {event.description.map((d, index) => (
                <p className="text-black dark:text-slate-300" key={index}>
                    {index == 0 ? (
                        <>
                            &emsp; {d} <br />{" "}
                        </>
                    ) : (
                        d
                    )}
                </p>
            ))}
        </div>
    ));
}

export default function ArchivedEvents() {
    const globalData = getGlobalData();
    return (
        <Layout>
            <SEO title="SAC | Events" description={globalData.description}></SEO>
            <div className="sm:mx-64 sm:my-12 flex flex-col mt-8 justify-center">
                {eventsMapping()}
            </div>
        </Layout>
    );
}
