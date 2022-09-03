import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const useFirestore = (collectionName) => {
    const [docs, setDocs] = useState([]);
    const collectionRef = collection(projectFirestore, collectionName);
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    useEffect(() => {
        onSnapshot(q, (snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({ ...doc.data(), id: doc.id });
            });
            setDocs(documents);
        });
    }, [collectionName]);

    return { docs }
};

export default useFirestore;