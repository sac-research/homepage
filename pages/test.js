import { app } from "../firebase/firebaseConfig";
import { database } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Layout from "../components/Layout";
import { useState } from "react";

export default function Test() {
    const [data, setData] = useState({});
    const collectionRef = collection(database, "members");

    const handleInput = (e) => {
        let newInput = { [e.target.name]: e.target.value };
        setData({ ...data, ...newInput });
    };

    const handleSubmit = () => {
        addDoc(collectionRef, {
            firstName: data.firstName,
            midName: data.midName,
            lastName: data.lastName,
        })
            .then(() => {
                alert("Data added");
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <Layout>
            <input
                onChange={(e) => handleInput(e)}
                name="firstName"
                placeholder="First Name"
            ></input>
            <input
                onChange={(e) => handleInput(e)}
                name="midName"
                placeholder="Middle Name"
            ></input>
            <input onChange={(e) => handleInput(e)} name="lastName" placeholder="Last Name"></input>
            <button onClick={handleSubmit}>Submit</button>
        </Layout>
    );
}
