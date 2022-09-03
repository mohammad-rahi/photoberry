import styles from './cards.module.scss';
import Card from './Card';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';

const Cards = ({ setSelectedImage }) => {
    const { docs } = useFirestore("images");

    return (
        <div className={styles.cards}>
            <h1 className={styles.title}><span>/</span> Photos</h1>

            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className={styles.wrapper}>
                {
                    docs && docs.map(doc => {
                        return (
                            <Card path={doc.url} id={doc.id} setSelectedImage={setSelectedImage} />
                        )
                    })
                }
            </motion.div>
        </div>
    )
}

export default Cards