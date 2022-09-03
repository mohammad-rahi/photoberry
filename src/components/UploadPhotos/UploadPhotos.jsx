import { useState } from 'react'
import { FaUpload } from 'react-icons/fa'
import Progress from '../Progress/Progress';
import styles from './upload-photos.module.scss'

const UploadPhotos = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ["image/png", "image/jpeg"];

    const handleChange = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError(null);
        }
        else {
            setFile(null);
            setError("Please select an image file (png or jpg)");
        }
    }
    return (
        <div className={styles.upload_photos}>
            <h1 className={styles.title}>Automatically Upload on Firebase</h1>
            <label className={styles.label} >
                <input type="file" onChange={handleChange} />
                <span> <FaUpload /> Upload</span>
            </label>

            {error && <div className={styles.error}>{error}</div>}
            {file && <Progress file={file} setFile={setFile} />}
        </div>
    )
}

export default UploadPhotos