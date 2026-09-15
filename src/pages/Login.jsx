import styles from './Login.module.css'
import { Link } from 'react-router'

export default function Login() {
    
    return (
        <>
            <div className={styles.card}>
                <form action="" className={styles.loginForm}>
                    <h1>Login</h1>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder=""/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"/>
                    <div className={styles.forget}>
                        <input type="checkbox" id='checkbox' name='checkbox'/>
                        <label htmlFor="checkbox">Remember Me</label>
                        <Link to={'/'}>Forget Password</Link>
                    </div>
                    <button>Log in</button>
                    <div className={styles.register}>
                        <p>Don't have an account? <Link to={'/'}>Register</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}