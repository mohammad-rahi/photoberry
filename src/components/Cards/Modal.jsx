import styles from './modal.module.scss';
import cNames from 'classnames';
import {motion} from 'framer-motion';

const Modal = ({ selectedImage, setSelectedImage }) => {
    const handelModal = (e) => {
        if (e.target.className.includes('open')) {
            setSelectedImage(null);
        }
    };

    return (
        <div
            className={selectedImage ? cNames(styles.modal, styles.open) : cNames(styles.modal)}
            onClick={handelModal}
        >
            <motion.img src={selectedImage} initial={{y: "-100vh"}} animate={{y: 0}} />
        </div>
    )
}

export default Modal