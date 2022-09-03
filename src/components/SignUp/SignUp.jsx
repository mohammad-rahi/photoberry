import styles from './sign-up.module.scss';
import googleLogo from '../../assets/images/Google__G__Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SignUp = ({ title, path, value, setEmail, setPassword, error, handleLoginRegister, handleSignInWithGoogle }) => {
    const navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');

        if (authToken) {
            navigate('/photos');
        }
    }, [])

    return (
        <div className={styles.sign_up}>
            <div className={styles.wrapper}>
                <form className={styles.form} onSubmit={handleLoginRegister}>
                    {
                        error && <div className={styles.error}>
                            {error}
                        </div>
                    }
                    <h1 className={styles.title}>{title}</h1>
                    {/* <p className={styles.text}>Easy to share.</p> */}
                    <div className={styles.form_field}>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} name="email" autocomplete="off" required />
                        <label htmlFor="email" className={styles.label_name}>
                            <span className={styles.label_content}>
                                Email
                            </span>
                        </label>
                    </div>
                    <div className={styles.form_field}>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} name='password' autocomplete="off" required />
                        <label htmlFor="password" className={styles.label_name}>
                            <span className={styles.label_content}>
                                Password
                            </span>
                        </label>
                    </div>

                    <button className={styles.submit}>{title}</button>

                    <div className={styles.more_options}>
                        <p>Or</p>
                        <div className={styles.google_option} onClick={handleSignInWithGoogle}> <img src={googleLogo} className={styles.googel_logo} /> {title} with <b>Google</b></div>
                        <Link className={styles.register_link} to={path}>{value}</Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUp;