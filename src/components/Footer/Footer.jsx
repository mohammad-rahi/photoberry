import { FaDev, FaEnvelope, FaGithubAlt, FaLinkedin, FaLocationArrow, FaMedium } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.wrapper}>
          <div className={styles.footer_top_left}>
            <h2>About</h2>
            <p>PhotoBerry is a React application. For the front-end, I used React, Sass, and HTML5. And for the backend I used Firebase. Thank you for exploring Photoberry.</p>
          </div>
          <div className={styles.footer_top_middle}>
            <h2>Let's Connect</h2>
            <div className={styles.social}>
              <a href="https://github.com/mohammad-rahi" target="_blank"><FaGithubAlt /> GitHub</a>
              <a href="https://linkedin.com/in/mohammadrahi03/" target="_blank"><FaLinkedin /> LinkedIn</a>
              <a href="https://medium.com/@mohammadrahi" target="_blank"><FaMedium />Medium</a>
              <a href="https://dev.to/mohammadrahi" target="_blank"><FaDev />Dev.to</a>
            </div>
          </div>
          <div className={styles.footer_top_right}>
            <h2>Contact</h2>
            <div className={styles.contact}>
              <p><FaLocationArrow /> Location: Noakhali, Bangladesh</p>
              <p><FaEnvelope /> Email: <a href="mailto:mohammadrahi@gmail.com">mohammadrahi@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.wrapper}>
          <p>&copy; 2022 <Link to='/'>PhotoBerry</Link></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
