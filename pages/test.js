import { doc, getDoc, setDoc } from "firebase/firestore";

const docRef = doc(db, "members", "dummymember");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.table(docSnap.data());
} else {
    console.log("No such document");
}
