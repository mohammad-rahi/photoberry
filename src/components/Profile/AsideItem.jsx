import styles from './profile.module.scss'
import { Link, useNavigate } from "react-router-dom"
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'
import classNames from 'classnames'

const AsideItem = ({ path, children }) => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        if (window.confirm("Ary you sure?\nYou want to log out.")) {
            signOut(auth)
            sessionStorage.removeItem('Auth Token');
            navigate('/login');
        }
    }

    return (
        <li className={styles.aside_item}>
            {path ? <Link to={path} className={classNames(styles.aside_link, styles.active)}>{children}</Link> : <a className={styles.aside_link} onClick={handleLogOut}>{children}</a>}
        </li>
    )
}

export default AsideItem