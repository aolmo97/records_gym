import { db } from '../../firebase';
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore';

export const getExercises = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "exercises"));
        return querySnapshot;
    } catch (error) {
        console.error("Error loading exercises: ", error);
    }
}