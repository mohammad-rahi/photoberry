import styles from './profile.module.scss'
// import variables from '../../global/_variables.scss'
import AsideItem from './AsideItem'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';

const Profile = ({ currentUser }) => {
    const [color, setColor] = useState('#009EB0');
    let navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');

        if (!authToken) {
            navigate('/login');
        }
    }, []);

    const handleColor = (e) => {
        setColor(e.target.value)
        // variables.primaryColor = color;
        document.documentElement.style.setProperty("--primary-color", color);
    }


    return (
        <div className={styles.profile}>
            <div className={styles.wrapper}>
                <aside>
                    <ul className={styles.aside_menu}>
                        <AsideItem path="/profile"> <FaUser className={styles.aside_icon} /> Profile</AsideItem>
                        <AsideItem> <FaSignOutAlt className={styles.aside_icon} /> Log Out</AsideItem>
                    </ul>
                </aside>
                <main>
                    <h1>Profile</h1>
                    <div className={styles.profile_inforamtion}>
                        <div className={styles.fields}>
                            <label>Your Email</label>
                            <input type="text" value={currentUser} disabled />
                        </div>
                        <div className={styles.fields}>
                            <label htmlFor='color'>
                                <span>Choose Your Color</span> <span className={styles.color_wrapper} style={{ borderColor: color, color, }}>{color}</span>
                                <input type="color" id='color' onChange={handleColor} value={color} />
                            </label>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Profile