import { useState, useEffect } from "react"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { projectFirestore, projectStorage } from "../firebase/config";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = ref(projectStorage, `/images/${file.name}`)
        const collectionRef = collection(projectFirestore, "images")

        uploadBytesResumable(storageRef, file)
            .on("state_changed", (snapshot) => {
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(progress);
            }, (err) => {
                setError(err);
            }, async () => {
                const url = await getDownloadURL(storageRef);
                setUrl(url)
                const createdAt = Timestamp.now();
                await addDoc(collectionRef, { url, createdAt });
            }
            )
    }, [file]);

    return { progress, url, error }
}

export default useStorage;