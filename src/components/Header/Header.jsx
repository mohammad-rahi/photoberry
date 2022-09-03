import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import cNames from 'classnames';
import styles from './header.module.scss'
import NavbarItem from './NavbarItem';

const Header = ({ currentUser }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link to={'/'} className={styles.navbar_logo}>PhotoBerry</Link>

                <div className={styles.menu_icon} onClick={handleClick}>
                    {
                        !clicked ? <FaBars className={styles.icon} /> : <FaTimes className={styles.icon} />
                    }
                </div>

                <ul className={!clicked ? cNames(styles.navbar_manu) : cNames(styles.navbar_manu, styles.open)}>
                    <NavbarItem path='/' setClicked={setClicked}>Home</NavbarItem>
                    {
                        !currentUser ?
                            <NavbarItem path='/login' setClicked={setClicked}>Log In</NavbarItem> :
                            <>
                                <NavbarItem path="/photos" setClicked={setClicked} >Photos</NavbarItem>
                                <NavbarItem path="/profile" setClicked={setClicked} >Profile</NavbarItem>
                            </>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;