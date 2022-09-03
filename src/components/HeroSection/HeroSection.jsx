import styles from './hero-section.module.scss'
import { Link } from 'react-router-dom'
import Cards from '../Cards/Cards'
import Modal from '../Cards/Modal'
import { useState } from 'react'

const HeroSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className={styles.hero_section}>
            <div className={styles.hero_top}>
                <div className={styles.hero_wrapper}>
                    <div className={styles.hero_top_text}>
                        <h1 className={styles.title}>Upload Photos</h1>
                        <p> PhotoBerry is the home for photos, automatically organized and easy to share.</p>
                        <Link to='/login' className={styles.hero_link}>Get Started</Link>
                    </div>
                    <div className={styles.hero_top_right_image}></div>
                </div>
            </div>
            <div className={styles.hero_bottom}>
                <Cards setSelectedImage={setSelectedImage} />
                <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            </div>
        </div>
    )
}

export default HeroSection