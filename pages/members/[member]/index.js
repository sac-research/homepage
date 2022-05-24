import { useRouter } from "next/router";
import { members } from "../../../data/members";
import Layout from "../../../components/Layout";

export default function Member() {
    const router = useRouter();
    const { member } = router.query;

    return (
        <Layout>
            <h1>Member: {member}</h1>
        </Layout>
    );
}
