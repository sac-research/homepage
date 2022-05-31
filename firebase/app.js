// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";
// import { firebaseConfig } from "./firebaseConfig";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Initialize Firebase and Firestore
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);

// try {
//     const docRef = await addDoc(collection(db, "members"), {
//         firstName: "Anh",
//         midName: "Hoang",
//         lastName: "Nguyen",
//         role: "Undergraduate Research Assistant",
//     });
//     console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//     console.log("Error adding document: ", e);
// }
