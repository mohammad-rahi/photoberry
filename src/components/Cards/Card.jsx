import styles from './card.module.scss'
import { motion } from 'framer-motion'

const Card = ({ path, id, setSelectedImage }) => {

  return (
    <motion.figure initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.card} key={id} onClick={() => setSelectedImage(path)}>
      <img src={path} alt="uploaded photo" />
    </motion.figure>
  )
}

export default Card