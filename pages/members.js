import Header from "../components/Header";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import dataMembers from "../data/Members";

export default function Members() {
    
    return <Layout>
        <SEO title="SAC - Members"></SEO>
        <Header></Header>
        <h1 className="text-4xl mt-8 border-b-solid border-b-1">Faculty</h1>
        
    </Layout>
}