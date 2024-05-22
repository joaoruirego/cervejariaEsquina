import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
export const getContentData = async () => {
  try {
    const docRef = doc(db, "admin", "conteudos");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    throw error;
  }
};
