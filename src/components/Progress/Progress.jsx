import { useEffect } from 'react';
import useStorage from '../../hooks/useStorage'
import styles from './progress.module.scss'
import { motion } from 'framer-motion';

const Progress = ({ file, setFile }) => {
    const { progress, url } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <div className={styles.progress}>
            <motion.div
                initial={{ width: 0 }}
                className={styles.progress_bar}
                animate={{ width: `${progress}%` }}
            ></motion.div>
        </div>
    )
}

export default Progress