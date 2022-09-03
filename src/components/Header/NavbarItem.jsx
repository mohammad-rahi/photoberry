import styles from './navbar-item.module.scss'
import { Link } from 'react-router-dom'

const NavbarItem = ({ path, children, setClicked }) => {
    
    const closeMenu = () => {
        setClicked(false)
    }

    return (
        <li className={styles.navbar_item} onClick={closeMenu}>
            {
                path ? <Link to={path} className={styles.navbar_link}>{children}</Link> :
                    <a className={styles.navbar_link}>{children}</a>
            }
        </li>
    )
}

export default NavbarItem