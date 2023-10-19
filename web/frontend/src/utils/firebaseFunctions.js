import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    setDoc,
  } from "firebase/firestore";
  import { firestore } from "../firebase.config";
  
  // Saving new Item
  export const saveItem = async (data) => {
    await setDoc(doc(firestore, "frames", `${Date.now()}`), data, {
      merge: true,
    });
  };
  
  export const getAllFrames = async () => {
    const items = await getDocs(
      query(collection(firestore, "frames"), orderBy("id", "desc"))
    );
  
    return items.docs.map((doc) => doc.data());
  };