import { Link } from "react-router"
import Brand from "./Brand"
import styles from './Header.module.css'

export default function Header() {
    
    return (
        <header className={styles.header}>
            <div>
                <Link to={'/'}>
                    <Brand />
                </Link>
            </div>
            <div className={styles.authContainer}>
                <Link to={'/login'} className={styles.loginButton}>Log in</Link>
                <Link to={'/register'} className={styles.registerButton}>Sign up</Link>
            </div>
        </header>
    )
}